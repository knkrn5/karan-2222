import { Contact } from "../models/contact.model.js";


const contactInfo = async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      const contactMsg = await Contact.create({ 
        Name: name, 
        Email: email, 
        Message: message 
      });

      console.log(contactMsg._id);
  
      return res.status(201).json({
        success: true,
        status: "Message Sent successfully",
        data: contactMsg
      });
  
    } catch (error) {
      return res.status(500).json({
        success: false,
        status: "Something went wrong.",
        message: error.message,
        data: req.body,
      });
    }
  }
  

export { contactInfo };
