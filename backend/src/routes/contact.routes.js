import express from "express";
import { contactInfo, updateContactMessage, deleteContactMessage } from "../controllers/contact.controller.js";
import { contactLimiter } from "../middlewares/contact.middleware.js";

const router = express.Router();

router.post("/message", contactLimiter, contactInfo);
router.put("/message", contactLimiter, updateContactMessage);
router.delete("/message", contactLimiter, deleteContactMessage);

console.log(contactLimiter.message)

export default router;