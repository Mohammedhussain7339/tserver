const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  whosaid: {
    type: String,
    required: true,
  },
  whatsaid: {
    type: String,
    required: true,
  },
  image: {
    type: String, // You can store the image URL or path as a string
    required: true,
  },
  fontStyle: {
    type: String,
    default: 'normal', // Default font style
  },
  fontSize: {
    type: String,
    default: '16', // Default font size in px
  },
  fontFamily: {
    type: String,
    default: 'Arial', // Default font family
  },
  fontColor: {
    type: String,
    default: '#000000', // Default color in hex
  },
  textAlign: {
    type: String,
    default: 'center', // Default text alignment
  },
  textPosition: {
    type: String,
    default: 'center', // Default text position (top, center, bottom)
  },
}, { timestamps: true });

module.exports = mongoose.model('Quote', QuoteSchema);
