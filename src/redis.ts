import "server-only";
import { createClient } from "redis"

async function redisClientSingleton() {
    console.log('Initializing Redis Client...', process.env.REDIS_URL)
    const client = createClient({
        url: process.env.REDIS_URL,
    })
    client.on('error', err => console.error('Redis Client Error', err))
    await client.connect()
    console.log('Redis Client connected...')
    return client
}

declare global {
    var redisClient: undefined | Awaited<ReturnType<typeof redisClientSingleton>>
}

async function getRedisInstance() {
    if (!globalThis.redisClient) {
        const redisClient = await redisClientSingleton()
        globalThis.redisClient = redisClient
    }
    return globalThis.redisClient
}


export default getRedisInstance