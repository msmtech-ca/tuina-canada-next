import "server-only";
import { cookies } from "next/headers";
import getRedisInstance from "./redis";
import sessionManager from './session';
import bcrypt from 'bcrypt'
import { Auth } from './types';
import { INSECURE_SECRET } from "./lib/constants";
import prisma from "./database";
import { totp } from "otplib"
import { encrypt, decrypt } from "./lib/utils";

if (!process.env.APP_SECRET) console.warn('No APP_SECRET env was provided! Using default INSECURE_SECRET...')

totp.options = {
    ...totp.allOptions(),
    digits: 6,
    step: 600,
    window: 0,
}

const authManager = {
    authenticate: async () => {
        const storedAuth = await sessionManager.get('auth');
        if (!storedAuth) {
            return null
        }
        const auth: Auth = JSON.parse(storedAuth)
        return auth?.user ?? null
    },
    findUser: async (email: string) => {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
                deleted: false,
            },
            include: {
                role: true,
            },
        })
        return user
    },
    generateMagicToken: (email: string) => {
        return encodeURI(encrypt(totp.generate(`${process.env.APP_SECRET || INSECURE_SECRET}_${email}`)))
    },
    verifyMagicToken: (token: string, secret: string) => {
        return totp.verify({
            token: decodeURI(decrypt(token)),
            secret: secret,
        })
    },
    initiate: async (email: string) => {
        const user = await authManager.findUser(email)
        if (!user) {
            return null
        }
        return authManager.generateMagicToken(email)
    },
    login: async (token: string, email: string) => {
        const isValid = authManager.verifyMagicToken(token, `${process.env.APP_SECRET || INSECURE_SECRET}_${email}`)
        if (!isValid) {
            return null
        }
        const user = await authManager.findUser(email)
        if (!user) {
            return null
        }
        const auth: Auth = {
            accessToken: null,
            user: user,
        }
        await sessionManager.set('auth', JSON.stringify(auth), 3600)
        return true
    },
    logout: async () => {
        await sessionManager.delete('auth')
    }
}

export default authManager