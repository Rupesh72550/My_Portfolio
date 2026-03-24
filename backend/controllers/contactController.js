const Contact = require('../models/Contact');

const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // 2. Save to database
    const newContact = await Contact.create({
      name,
      email,
      message
    });

    // 3. Success Response
    return res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully!',
      data: newContact
    });

  } catch (error) {
    console.error('Submit Contact Error:', error);
    
    // Check for Mongoose Validation Errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }

    return res.status(500).json({ 
      success: false, 
      message: 'Server error while processing your message. Please try again.' 
    });
  }
};

module.exports = { submitContactForm };
