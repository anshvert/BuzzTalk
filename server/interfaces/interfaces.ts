import { Request } from "express";

export interface ApiReturn {
    success: boolean;
    message: string;
    data?: {} | null;
}
