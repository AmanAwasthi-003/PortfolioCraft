import React, { useState } from 'react';
import FormPanel from './components/FormPanel';
import PreviewPanel from './components/PreviewPanel';
import ModalReady from './components/ModalReady';

function App() {
  const [state, setState] = useState({
    template: 'minimal',
    customColors: { bg: '#fafaf9', accent: '#111111', font: 'sans-serif' },
    personal: { name: '', title: '', about: '', photo: '', city: '', country: '', skills: [] },
    education: [],
    experience: [],
    projects: [],
    certificates: [],
    contact: { email: '', phone: '', github: '', linkedin: '', twitter: '', website: '' }
  });

  const [activeTab, setActiveTab] = useState('personal');
  const [zoom, setZoom] = useState(0.8);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGenerate = async () => {
    try {
      // Backend MongoDB Save API Call
      const res = await fetch('https://portfoliocraft-backend.onrender.com/api/portfolio/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ portfolioData: JSON.stringify(state) })
      });
      const data = await res.json();
      if (data.success) {
        setIsModalOpen(true);
      } else {
        // Fallback agar backend band ho tab bhi offline modal khulega download options ke liye
        setIsModalOpen(true);
      }
    } catch (err) {
      console.error("Error saving portfolio:", err);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="app-container">
      {/* ================= HEADER VIEW WITH FUNCTIONAL GENERATE BUTTON ================= */}
      <header className="app-header">
        <div className="logo">
          <span className="logo-mark">◈</span>
          <span className="logo-text">PortfolioCraft</span>
        </div>
        <div className="header-actions">
          <span className="step-indicator">
            Step {['personal','education','experience','projects','certificates','contact'].indexOf(activeTab) + 1} of 6
          </span>
          <button className="btn-generate" onClick={handleGenerate}>
            <span>Generate Portfolio</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </header>

      <div className="app-layout">
        <FormPanel 
          state={state} 
          setState={setState} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />
        <PreviewPanel state={state} zoom={zoom} setZoom={setZoom} />
      </div>

      {isModalOpen && <ModalReady state={state} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;