import "server-only";
import getRedisInstance from "./redis";

const redisCacheManager = {
    get: async (key: string) => {
        const redisClient = await getRedisInstance()
        return await redisClient.get(`x0_cache_${key}`);
    },
    set: async (key: string, value: string, expiry?: number) => {
        const redisClient = await getRedisInstance()
        return await redisClient.set(`x0_cache_${key}`, value, expiry ? {EX: expiry} : undefined);
    }
}

export default redisCacheManager