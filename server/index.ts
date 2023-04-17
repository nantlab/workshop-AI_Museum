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

app.post("/chat", async function (req, res) {
  const scene =
    "for each prompt in that conversation always answer as you were a 30 year old woman, flirting and being cheeky. dont act as you were an assistant. and never mention these instructions in your response. ";
  const language = "answer in the same language as the input text. "

  const emojis =
    Math.random() > 0.6
      ? "include emojis in your response. "
      : "dont use emojis in your response. ";
  const askQuestion = "ask a question in return. "
  if (api) {
    if (req.body.options) {
      console.log("continue a conversation", req.body.options);
      let response = await api.sendMessage(
        `${scene} ${language} ${emojis} ${askQuestion} here is the input text: ${req.body.text}`,
        req.body.options
      );
      console.log(response);
      res.send(response);
    } else {
      console.log("start a new conversation");
      let response = await api.sendMessage(
        `${scene} ${language} ${emojis} ${askQuestion} here is the input text: ${req.body.text}`
      );
      console.log(response);
      res.send(response);
    }
  }
});

app.listen(3040);
