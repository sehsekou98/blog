import { PrismaClient } from '@prisma/client'

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.client

export default client
// use `prisma` in your application to read and write data in your DB