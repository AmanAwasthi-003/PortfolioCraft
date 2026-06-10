const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

router.post('/save', async (req, res) => {
  try {
    const data = JSON.parse(req.body.portfolioData);
    const newPortfolio = new Portfolio(data);
    await newPortfolio.save();
    
    res.status(201).json({ 
      success: true, 
      id: newPortfolio._id, 
      message: "Portfolio data structural model saved onto MongoDB successfully!" 
    });
  } 
  catch (error) {
    console.error("Route Error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;