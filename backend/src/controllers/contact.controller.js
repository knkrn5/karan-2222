// import {contactModel } from "../models/contact.model.js";


const contactInfo = async (req, res) => {
    try {
        const contact = await contactModel.create(req.body);
        return res.status(200).json({
            success: true,
            message: "contact info sent successfully",
            contact
        });
    } catch (error) {
        return res.status(500).json({   
            success: false,
            message: error.message
        });
    }
}

export {contactInfo}