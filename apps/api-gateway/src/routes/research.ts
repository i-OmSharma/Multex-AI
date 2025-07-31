import express from 'express';
import { sendToAgent } from '../utils/request.js';

const router = express.Router();

router.post('/api/research', async (req, res) => {
    try{
        const response = await sendToAgent("research", req.body);
        res.json(response);
    } catch (err: any) {
        res.status(500).json({error: err.message})
    }
})

export default router;