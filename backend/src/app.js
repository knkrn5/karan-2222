import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));


// Middleware setup
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({limit: "16kb", extended: true}));
app.use(express.static("public"));
app.use(cookieParser());




//routes imports
import userRoutes from "./routes/user.routes.js";
import contactRoutes from "./routes/contact.routes.js";


//routes
app.use("/api/user", userRoutes);
app.use("/api/contact", contactRoutes);



export {app};