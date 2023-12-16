import getPrismaInstance from "../utils/PrismaClient.js";
import { PrismaInstance } from "../types/types.js";
import { Request, Response, NextFunction } from "express";
import { ApiReturn } from "../interfaces/interfaces.js";

export const checkUser = async (req: Request, res: Response<ApiReturn>, next: NextFunction): Promise<any> => {
    try {
        const { email } = req.body
        if (!email) {
            return res.json({ success: false, message: "Email is Required" })
        }
        const prisma: PrismaInstance = getPrismaInstance()
        const user = await prisma.user.findUnique({ where: { email }})
        if (!user) {
            return res.json({ success: false, message: "User not found" })
        }
        return res.json({ success: true, message: "User Found", data: user })
    } catch (err: any) {
        return res.json({ success: false, message: err.message })
    }
}