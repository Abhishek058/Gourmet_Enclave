import express from "express";
import { PORT } from "./config.js";

const app = express();

app.use(express.json());
app.use(cors());
