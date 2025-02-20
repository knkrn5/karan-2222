import express from "express";
import { contactInfo, updateContactMessage } from "../controllers/contact.controller.js";
const router = express.Router();

router.post("/message", contactInfo);
router.put("/message", updateContactMessage);

export default router;