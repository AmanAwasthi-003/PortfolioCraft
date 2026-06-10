const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json()); 
app.use('/api/portfolio', require('./routes/portfolioRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running smoothly on port ${PORT} ◈`));