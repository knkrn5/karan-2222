import express, { application } from "express";
import { contactInfo } from "../controllers/contact.controller.js";


const router = express.Router();


router.route("/contact").post(contactInfo)

export default router ;