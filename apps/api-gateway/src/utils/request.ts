import axios from "axios";

const baseURL = process.env.N8N_BASE_URL;

export const sendToAgent = async (agentPath: string, payload: any) => { //here it takes the agent path,and the payload(data u want to send)
    const url = `${baseURL}/webhook/${agentPath}`;                      // here it makes the url, buildign webhook url. Combining the basen8n + webhook trigger
    try{
        const res = await axios.post(url,payload);  //post request sends to url and the data.
        return res.data;                            //return as the respose fom the server.
    }catch(err) {
        console.error(`Agent Error ${agentPath}`, err);
        throw new Error(`Agent call Failed:${agentPath}`)
    }
}