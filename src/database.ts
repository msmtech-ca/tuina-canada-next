import "server-only";
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
    console.log('Initializing Prisma Client...')
    // Debug mode
    //
    // const prismaClient = new PrismaClient({
    //     log: [
    //         {
    //             emit: "event",
    //             level: "query",
    //         },
    //     ],
    // })
    // prismaClient.$on("query", async (e) => {
    //     console.log(`${e.query} ${e.params}`)
    // });
    const prismaClient = new PrismaClient()
    globalThis.prisma = prismaClient
    return prismaClient
}

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma