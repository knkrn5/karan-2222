import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

//monotholic
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();

//monotholic
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Serve the frontend build files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Send index.html for any unknown routes (for React Router) 
// optional
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });


const corsOptions = {
    origin: ['https://karan-2222-1.onrender.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 200, // Fixes legacy browser issues
};

app.use(cors(corsOptions));



// Middleware setup
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