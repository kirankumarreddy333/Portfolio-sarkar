import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, project, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      project,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      contact,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getContacts = async (req, res) => {
  try {

    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.json(contacts);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteContact = async (req, res) => {
  try {

    await Contact.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Message deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};