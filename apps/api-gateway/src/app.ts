import express from "express";
import { apiKeyAuth } from "./middleware/auth.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { createAgentRoute } from "./routes/genericAgentRoute.js";


const app = express();
app.use(express.json());

// Enable API key, we can dissable this for local dev.
app.use(apiKeyAuth);

// agents routing
app.use('/api/research', createAgentRoute('research'));
app.use('/api/analysis', createAgentRoute('analysis'));
app.use('/api/communication', createAgentRoute('communication'));
app.use('/api/planning', createAgentRoute('planning'));


// main route
app.get('/', (_, res) => {
    res.send("Multex-AI API Gateway")
});


app.use(errorHandler);
export default app;