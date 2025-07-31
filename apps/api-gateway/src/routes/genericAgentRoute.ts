import  express  from "express";
import { sendToAgent } from "../utils/request.js";

export function createAgentRoute(agentName: string) {
    const router = express.Router();
    router.post('/', async (req, res, next) => {
        try{
            const response = await sendToAgent(agentName, req.body);
            res.json(response);
        } catch(err) {
            next(err);
        }
    });
    return router;
}