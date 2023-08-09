import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import { Configuration, OpenAIApi } from "openai";
import OpenAiRouter from "./components/routes/OpenAi";
// configuration
dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const PORT = process.env.PORT || 9000;

// OPEN AI configuration

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);

// ROUTER
app.use("/openai", OpenAiRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server running at http://localhost:${PORT}`);
});
