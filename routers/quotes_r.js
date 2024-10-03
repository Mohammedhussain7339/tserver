const express = require('express');
const router = express.Router();
const { addQuote } = require('../controllers/quotes_c');
const dataController = require('../controllers/quotes_c')
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Multer for image uploads
cloudinary.config({
  cloud_name: 'dryj1itgo',
  api_key: '232981787787818',
  api_secret: 'OTjVgcLiMORbbKJO8v-1hRr11Gg',
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: 'products',
      format: 'png', // Or jpg based on your preference
      public_id: file.originalname.split('.')[0], // Optional: use the original filename as public_id
    };
  },
});
const upload = multer({ storage });

// POST route to add a new quote with image and font styles
router.post('/quotes', upload.single('image'), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded or invalid file format');
    }
    await addQuote(req, res);
  } catch (error) {
    next(error); // Passes errors to error-handling middleware
  }
});

router.get('/quotes', dataController.getQuote); // Change to GET for fetching






// router.get('/quotes', async (req, res, next) => {
//   try {
//     const quotes = await getQuote(); // Fetch all quotes from the database or source
//     res.status(200).json(quotes); // Respond with the list of quotes
//   } catch (error) {
//     next(error); // Handle errors
//   }
// });

module.exports = router;
