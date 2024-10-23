const userdb = require('../models/userinfo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Function to create a new user
exports.createUser = async (req, res) => {
    console.log('Request Body:', req.body);  // Log the request body for debugging

    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        console.log('Username:', username);  // Log the username to confirm it's received

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create a new user
        const newUser = new userdb({
            username,
            email,
            password: hashedPassword
        });

        // Save the user to the database
        const saveUser = await newUser.save();

        // Create a JWT token
        console.log('User saved successfully:', saveUser);

        // Send the JWT token and username to the client

    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ message: 'Error saving user' });
    }
};

exports.loginUser = async (req, res) => {
    console.log('Request Body:', req.body);  // Log the request body for debugging

    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find the user by email
        const user = await userdb.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Create a JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,  // Ensure JWT_SECRET is set in your environment
            { expiresIn: '1h' }
        );

        console.log('User logged in successfully:', user);

        // Send the JWT token and username to the client
        res.json({
            message: 'Login successful',
            token,
            username: user.username
        });

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Error during login' });
    }
};
