import { error } from "console";
import { Request, Response, NextFunction } from "express";

export function apiKeyAuth(req: Request, res: Response, next: NextFunction) {
    const key = req.header('x-api-key');
    if(key && key === process.env.API_KEY) return next();
    return res.status(401).json({ error: "Unauthorized" });
}