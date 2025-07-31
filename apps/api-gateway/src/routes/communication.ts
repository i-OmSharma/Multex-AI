import express from 'express';
import { sendToAgent } from '../utils/request.js';

const router = express.Router();

router.post('/api/communication', async (req, res) => {
    try{
        const response = await sendToAgent("communication", req.body);
        res.json(response);
    } catch (err: any) {
        res.status(500).json({error: err.message})
    }
})

export default router;