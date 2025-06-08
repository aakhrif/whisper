import { OpenAI } from "openai";
import dotenv from "dotenv";
import { ListModels, BasicChat } from "./modules/ListModels";

dotenv.config();

const QUOTA = "EXCEEDED";
const openai = new OpenAI();

if (QUOTA !== "EXCEEDED") {
  ListModels(openai);
  BasicChat(openai);
}