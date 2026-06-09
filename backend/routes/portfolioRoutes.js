const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// Save or Update Portfolio Session Route
router.post('/save', async (req, res) => {
  try {
    // Frontend App.jsx se standard JSON layer body format string stream data read karna
    const data = JSON.parse(req.body.portfolioData);

    const newPortfolio = new Portfolio(data);
    await newPortfolio.save();
    
    res.status(201).json({ 
      success: true, 
      id: newPortfolio._id, 
      message: "Portfolio data structural model saved onto MongoDB successfully!" 
    });
  } catch (error) {
    console.error("Route Error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;