import express from "express";

const app = express();

app.use(express.json());


app.get('/', (_, res) => {
    res.send("Multex-AI API Gateway")
});


export default app;