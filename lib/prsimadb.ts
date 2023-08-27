import {PrismaClient} from "@prisma/client";
 
// to remove error we have decalred this globally
declare global{
    var prisma: PrismaClient | undefined;
};

const prismadb = globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;