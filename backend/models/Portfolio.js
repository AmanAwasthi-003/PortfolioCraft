const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  template: { type: String, default: 'minimal' },
  customColors: {
    bg: String,
    accent: String,
    font: String
  },
  personal: {
    name: String,
    title: String,
    about: String,
    photo: String, 
    city: String,
    country: String,
    skills: [String]
  },
  education: [{ 
    degree: String, 
    inst: String, 
    from: String, 
    to: String, 
    desc: String 
  }],
  experience: [{ 
    title: String, 
    company: String, 
    from: String, 
    to: String, 
    desc: String 
  }],
  projects: [{ 
    name: String, 
    tech: String, 
    desc: String, 
    live: String, 
    repo: String 
  }],
  certificates: [{ 
    title: String, 
    previewUrl: String, 
    description: String 
  }],
  contact: { 
    email: String, 
    phone: String, 
    github: String, 
    linkedin: String, 
    twitter: String 
  }
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', PortfolioSchema);