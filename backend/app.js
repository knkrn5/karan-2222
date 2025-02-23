import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();


//Middleware in Express processes requests in the order it’s defined.
// Middleware setup
const corsOptions = {
  origin: [
    'https://karan-2222-1.onrender.com', // Production frontend
    'http://localhost:5173',             // Local frontend (Vite default port)
    'http://localhost:3000',             // Local frontend (Vite default port)
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 200, // Fixes legacy browser issues
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());


//routes imports
import userRoutes from "./src/routes/user.routes.js";
import contactRoutes from "./src/routes/contact.routes.js";

//routes
app.use("/api/user", userRoutes);
app.use("/api/contact", contactRoutes);



export { app };