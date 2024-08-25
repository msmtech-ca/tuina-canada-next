import "server-only";
import { cookies } from "next/headers";
import getRedisInstance from "./redis";
import { encrypt, decrypt } from "./lib/utils";

type SessionId = string;
const sessionManager = {
    getSessionId: (): SessionId | null => {
        const cookieStore = cookies();
        const encryptedSessionId = cookieStore.get("x0_sessionId")?.value;
        if (!encryptedSessionId) {
            return null
        }
        try {
            const sessionId = decrypt(encryptedSessionId)
            return sessionId
        } catch (error) {
            return null
        }
    },
    setSessionId: (sessionId: SessionId): void => {
        const cookieStore = cookies();
        cookieStore.set("x0_sessionId", encrypt(sessionId));
    },
    getSessionIdAndCreateIfMissing: () => {
        const sessionId = sessionManager.getSessionId();
        if (!sessionId) {
            const newSessionId = crypto.randomUUID();
            sessionManager.setSessionId(newSessionId);
    
            return newSessionId;
        }
    
        return sessionId;
    },
    destroySession: () => {
        const cookieStore = cookies();
        cookieStore.delete("x0_sessionId");
    },
    get: async (key: string) => {
        const sessionId = sessionManager.getSessionId();
        if (!sessionId) {
            return null;
        }
        const redisClient = await getRedisInstance()
        return await redisClient.get(`x0_session_${sessionId}_${key}`);
    },
    set: async (key: string, value: string, expiry?: number) => {
        const sessionId = sessionManager.getSessionIdAndCreateIfMissing();
        const redisClient = await getRedisInstance()
        return await redisClient.set(`x0_session_${sessionId}_${key}`, value, expiry ? {EX: expiry} : undefined);
    },
    delete: async (key: string) => {
        const sessionId = sessionManager.getSessionId();
        if (sessionId) {
            const redisClient = await getRedisInstance()
            await redisClient.del(`x0_session_${sessionId}_${key}`);
        }
    }
}

export default sessionManager