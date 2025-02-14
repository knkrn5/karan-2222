import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// dotenv.config({ path: "./backend/.env" });

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

//creating middlewares
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({limit: "16kb", extended: true}));
app.use(express.static("public"));
app.use(cookieParser());





