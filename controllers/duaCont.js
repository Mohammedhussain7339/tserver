// controllers/duaCont.js

const dua_db = require('../models/duaModels');

// Function to create a new Dua
exports.createDua = async (req, res) => {
    console.log(req.body); // Log the request body for debugging
    try {
        const { duaTitle, duaDescription, dua, tarjuma } = req.body; // Ensure correct field names here
        const newDua = new dua_db({
            duaTitle,
            duaDes: duaDescription, // Assign duaDescription to duaDes if you want to keep it
            dua,
            tarjuma
        });

        const saveDua = await newDua.save();
        console.log('Duadata saved successfully:', saveDua);
        res.status(201).send('Duadata saved successfully');
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(500).send('Error saving product');
    }
};

// Function to fetch all Dua data
exports.getAllData = async (req, res) => {
    try {
        const data = await dua_db.find();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
};

