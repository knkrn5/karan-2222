// import {contactModel } from "../models/contact.model.js";


const contactInfo = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        console.log(name, email, message);
        
        // Sending a success response
        return res.status(200).json({   
            success: true,
            message: "Contact information received successfully"
        });

    } catch (error) {
        return res.status(500).json({   
            success: false,
            message: error.message
        });
    }
}

export { contactInfo };
