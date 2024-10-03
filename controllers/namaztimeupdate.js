const namaztime_db= require('../models/namaztimeModels')
exports.updatetime = async (req, res) => {
    try {
        const { id } = req.params; // Get ID from request parameters
        const { namazName, namaztime } = req.body; // Ensure correct field names here

        // Update the existing Namaz time record
        const updatedNamaztime = await namaztime_db.findByIdAndUpdate(
            id,
            { 
                namazName, 
                namaztime // Ensure this matches with the request body
            },
            { new: true } // Return the updated document
        );

        if (!updatedNamaztime) {
            return res.status(404).send('Namaz time not found');
        }

        console.log('Namaz time updated successfully:', updatedNamaztime);
        res.status(200).json(updatedNamaztime);
    } catch (error) {
        console.error('Error updating namaz time:', error);
        res.status(500).send('Error updating namaz time');
    }
};

// Function to delete a Namaz time by ID
exports.deletetime = async (req, res) => {
    try {
        const { id } = req.params; // Get ID from request parameters

        // Delete the Namaz time by its ID
        const deletedNamaztime = await namaztime_db.findByIdAndDelete(id);

        if (!deletedNamaztime) {
            return res.status(404).send('Namaz time not found');
        }

        console.log('Namaz time deleted successfully:', deletedNamaztime);
        res.status(200).send('Namaz time deleted successfully');
    } catch (error) {
        console.error('Error deleting namaz time:', error);
        res.status(500).send('Error deleting namaz time');
    }
};
