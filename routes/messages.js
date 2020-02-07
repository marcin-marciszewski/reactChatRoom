const express = require('express');
const router = express.Router();
const {
  check,
  validationResult
} = require('express-validator');

const Message = require('../models/Message');

// Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({
      date: -1
    });
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


//Get specific message 
router.get('/:content', async (req, res) => {
  try {
    const messages = await Message.find({
      content: {
        "$regex": req.params.content,
        "$options": "i"
      }
    }).sort({
      date: -1
    });
    res.json(messages);
    console.log(req.params.content)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Add new message
router.post(
  '/',
  check('content', 'Message is required')
  .not()
  .isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    const {
      content,
      user
    } = req.body;

    try {
      const newMessage = new Message({
        content,
        user
      });

      const message = await newMessage.save();
      res.json(message);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// Delete message
router.delete('/:id', async (req, res) => {
  try {
    let message = await Message.findById(req.params.id);

    if (!message)
      return res.status(404).json({
        msg: 'Contact not found'
      });

    await Message.findByIdAndRemove(req.params.id);

    res.json({
      msg: 'Message removed'
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;