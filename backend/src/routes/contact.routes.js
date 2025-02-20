import express from "express";
import { contactInfo, updateContactMessage, deleteContactMessage } from "../controllers/contact.controller.js";
const router = express.Router();

router.post("/message", contactInfo);
router.put("/message", updateContactMessage);
router.delete("/message", deleteContactMessage);

export default router;