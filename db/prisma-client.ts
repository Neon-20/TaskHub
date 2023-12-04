
// We do this, so that hot we can call prisma from client side
import {PrismaClient} from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined
}

//we check for production because we want to avoid re-initialising of
// prisma client in dev mode, because nextjs supports hot reloading.
export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV!=="production") globalThis.prisma = db;

