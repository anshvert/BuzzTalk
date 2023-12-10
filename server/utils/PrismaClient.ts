import { PrismaClient } from "@prisma/client";
import { PrismaInstance } from "../types/types.js";

let prismaInstance: PrismaInstance

const getPrismaInstance = () => {
    if (!prismaInstance) {
        prismaInstance = new PrismaClient()
    }
    return prismaInstance
}

export default getPrismaInstance