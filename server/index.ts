import dotenv from "dotenv";
import { ChatGPTAPI, ChatGPTUnofficialProxyAPI } from "chatgpt";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();

let api: ChatGPTAPI | null = null;
if (process.env.OPENAI_API_KEY) {
  api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY });
}

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/translateLanguage", async function (req, res) {
  let prompt = `translate the following text into ${req.body.language} language. `;
  if(req.body.simplify === true){
    prompt = `${prompt} and simplify it, in a way that it is understandable by a 10 year old pupil. `
  }
  if (api) {
    let response = await api.sendMessage(
      `${prompt} here is the input text:\n\n ${req.body.input}`
    );
    res.send(response);
  }
});

app.post("/simplify", async function (req, res) {
  let prompt = `rewrite the following text in a way that it is understandable by a 10 year old pupil. keep the original language.`;
  if (api) {
    let response = await api.sendMessage(
      `${prompt} here is the input text:\n\n ${req.body.input}`
    );
    res.send(response);
  }
});

app.listen(3040);
