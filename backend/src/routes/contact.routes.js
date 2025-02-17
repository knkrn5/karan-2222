import express from "express";
import { contactInfo } from "../controllers/contact.controller.js";
const router = express.Router();

router.route("/message").post(contactInfo);

export default router;