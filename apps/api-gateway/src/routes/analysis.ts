import express from 'express';
import { sendToAgent } from '../utils/request.js';

const router = express.Router();

router.post('/api/analysis', async (req, res) => {
    try{
        const response = await sendToAgent("analysis", req.body);
        res.json(response);
    } catch (err: any) {
        res.status(500).json({error: err.message})
    }
})

export default router;