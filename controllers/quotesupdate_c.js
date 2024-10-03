const Quote = require('../models/quotesModels');

// Function to update a quote
const updateQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const { whosaid, whatsaid, fontStyle, fontSize, fontFamily, fontColor, textAlign, textPosition } = req.body;

    const updateData = {
      whosaid,
      whatsaid,
      fontStyle,
      fontSize,
      fontFamily,
      fontColor,
      textAlign,
      textPosition,

    };

    // If an image was uploaded, add the image URL to the update data
    if (req.file) {
      updateData.image = req.file.path;
    }

    const updatedQuote = await Quote.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedQuote) {
      return res.status(404).json({ message: 'Quote not found' });
    }

    return res.status(200).json({ message: 'Quote updated successfully', quote: updatedQuote });
  } catch (error) {
    console.error('Error updating quote:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Function to delete a quote
const deleteQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQuote = await Quote.findByIdAndDelete(id);

    if (!deletedQuote) {
      return res.status(404).json({ message: 'Quote not found' });
    }

    return res.status(200).json({ message: 'Quote deleted successfully' });
  } catch (error) {
    console.error('Error deleting quote:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { updateQuote, deleteQuote };
