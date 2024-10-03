const express = require('express');
const cors =    require('cors')
const mongoURI=require('./db/connection');
const duaRouter= require('./routers/duarout')
const updateduaRouter = require('./routers/updatedua_r')
const namaztimeRouter = require('./routers/namaztime_r')
const timeupdateRouter = require('./routers/updatenamaz_r')
const quoteRoutes = require('./routers/quotes_r')
const updatequoteRoutes = require('./routers/updatequote_r')
require('dotenv').config();
const app = express();
const PORT = 8000;


const corsOptions = {
  origin: 'http://localhost:5173', // Updated to remove trailing slash
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json()); // Make sure you have this to parse JSON bodies


// Basic route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api', duaRouter); // Ensure the router is registered here
app.use('/api', updateduaRouter); // Ensure the router is registered here
app.use('/api',namaztimeRouter)
app.use('/api',timeupdateRouter)
app.use('/api', quoteRoutes);
app.use('/api', updatequoteRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
