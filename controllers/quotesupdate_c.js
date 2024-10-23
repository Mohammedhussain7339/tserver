const Quote = require('../models/quotesModels');

// Function to update a quote
const updateQuote = async (req, res) => {
    try {
      const { id } = req.params; // Extract quote ID from the request parameters
      const { whosaid, whatsaid, fontStyle, fontSize, fontFamily, fontColor, textAlign, textPosition } = req.body;
  
      // Prepare the update data object from the request body
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
  
      // Check if an image was uploaded, and if so, add its path to the update data
      if (req.file) {
        updateData.image = req.file.path; // Store the path of the uploaded image
      }
  
      // Update the quote in the database
      const updatedQuote = await Quote.findByIdAndUpdate(id, updateData, { new: true });
  
      // If the quote is not found, return a 404 response
      if (!updatedQuote) {
        return res.status(404).json({ message: 'Quote not found' });
      }
  
      // Successfully updated the quote, send the updated data back in the response
      return res.status(200).json({ message: 'Quote updated successfully', quote: updatedQuote });
    } catch (error) {
      // Handle any errors during the update process
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
