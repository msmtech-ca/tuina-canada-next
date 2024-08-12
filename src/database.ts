import "server-only";
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
    console.log('Initializing Redis Client...')
    const prismaClient = new PrismaClient()
    globalThis.prisma = prismaClient
    return prismaClient
}

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma