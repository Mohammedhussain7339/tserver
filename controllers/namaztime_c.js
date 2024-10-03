const namaztime_db = require('../models/namaztimeModels');
exports.createNamaztime = async (req, res) => {
    console.log(req.body); // Log the request body for debugging
    try {
        const { namazName,namaztime } = req.body; // Ensure correct field names here
        const newNamaztime = new namaztime_db({
            namazName,namaztime
        });

        const saveNamaztime = await newNamaztime.save();
        console.log('Duadata saved successfully:', saveNamaztime);
        res.status(201).send('Duadata saved successfully');
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(500).send('Error saving product');
    }
};

// Function to fetch all Dua data
exports.getNamaztime = async (req, res) => {
    try {
        const data = await namaztime_db.find();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
};
