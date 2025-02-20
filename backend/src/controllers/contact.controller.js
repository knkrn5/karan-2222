import { Contact } from "../models/contact.model.js";

// Adding Contact information
const contactInfo = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contactMsg = await Contact.create({
      Name: name,
      Email: email,
      Message: message,
      status: "unread" 
    });

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
};

// Update contact message
const updateContactMessage = async (req, res) => {
  try {
    const { id, message } = req.body;

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { $set: { Message: message, status: "updated" } },
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ success: false, status: "Message not found." });
    }

    return res.status(200).json({
      success: true,
      status: "Message updated successfully",
      data: updatedContact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      status: "Failed to update message.",
      message: error.message,
    });
  }
};

//Delete contact message
const deleteContactMessage = async (req, res) => {
  try {
    const { id } = req.body;

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ success: false, status: "Message not found." });
    }

    return res.status(200).json({
      success: true,
      status: "Message deleted successfully",
      data: deletedContact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      status: "Failed to delete message.",
      message: error.message,
    });
  }
};

export { contactInfo, updateContactMessage, deleteContactMessage };

