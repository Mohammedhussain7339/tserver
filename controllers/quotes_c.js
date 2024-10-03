const quotesModels = require('../models/quotesModels');
const Quote = require('../models/quotesModels'); // Import the Quote model

const addQuote = async (req, res) => {
  try {
    const { whosaid, whatsaid, fontStyle, fontSize, fontFamily, fontColor, textAlign, textPosition } = req.body;
    
    // Assuming you're using Multer to handle file uploads
    const image = req.file ? req.file.path : null;

    if (!whosaid || !whatsaid || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    

    // Create a new quote
    const newQuote = new Quote({
      whosaid,
      whatsaid,
      image,
      fontStyle,
      fontSize,
      fontFamily,
      fontColor,
      textAlign,
      textPosition,
    });

    // Save to the database
    await newQuote.save();

    return res.status(201).json({ message: 'Quote added successfully', quote: newQuote });
  } catch (error) {
    console.error('Error adding quote:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};
const getQuote=async(req,res)=>{
  try{
    const data = await quotesModels.find();
    res.status(200).json(data);
  }
  catch(error){
    console.error('Error fetching data:',error);
    res.data(500).send('Error fetching data')
  }
}

module.exports = { addQuote,getQuote };
