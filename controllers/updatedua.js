const dua_db = require('../models/duaModels');

exports.updateDua = async (req, res) => {
    try {
        const { id } = req.params; // Get ID from request parameters
        const { duaTitle, duaDescription, dua, tarjuma } = req.body; // Ensure correct field names here

        // Update the existing Dua record
        const updatedDua = await dua_db.findByIdAndUpdate(
            id,
            { 
                duaTitle, 
                duaDes: duaDescription, 
                dua, 
                tarjuma 
            },
            { new: true } // Return the updated document
        );

        if (!updatedDua) {
            return res.status(404).send('Dua not found');
        }

        console.log('Dua updated successfully:', updatedDua);
        res.status(200).json(updatedDua);
    } catch (error) {
        console.error('Error updating dua:', error);
        res.status(500).send('Error updating dua');
    }
};

// Function to delete a Dua by ID
exports.deleteDua = async (req, res) => {
    try {
        const { id } = req.params; // Get ID from request parameters

        // Delete the Dua by its ID
        const deletedDua = await dua_db.findByIdAndDelete(id);

        if (!deletedDua) {
            return res.status(404).send('Dua not found');
        }

        console.log('Dua deleted successfully:', deletedDua);
        res.status(200).send('Dua deleted successfully');
    } catch (error) {
        console.error('Error deleting dua:', error);
        res.status(500).send('Error deleting dua');
    }
};