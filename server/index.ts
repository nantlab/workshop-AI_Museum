import dotenv from "dotenv";
import { ChatGPTAPI, ChatGPTUnofficialProxyAPI } from "chatgpt";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import NodeCache from "node-cache"
import md5 from "md5"
dotenv.config();
const cache = new NodeCache();

let api: ChatGPTAPI | null = null;
if (process.env.OPENAI_API_KEY) {
  api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY });
}

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/translateLanguage", async function (req, res) {
  console.log("translating ...", req.body)
  const hash = md5(JSON.stringify(req.body))
  if(cache.has( hash )){
    const cachedResponse:any = cache.get(hash)
    res.send(cachedResponse);
    return 
  }
  let prompt = `translate the following text into ${req.body.language} language. `;
  if(req.body.simplify === true){
    prompt = `${prompt} and simplify it, in a way that it is understandable by a 10 year old pupil. `
  }
  if (api) {
    let response = await api.sendMessage(
      `${prompt} here is the input text:\n\n ${req.body.input}`
    );
    cache.set(hash, JSON.stringify(response))
    res.send(response);
  }
});

app.listen(3040);
