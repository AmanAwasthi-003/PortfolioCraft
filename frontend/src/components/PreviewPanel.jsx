import React from 'react';
import Minimal from '../templates/Minimal';
import DarkPro from '../templates/DarkPro';
import Vibrant from '../templates/Vibrant';
import Classic from '../templates/Classic';

function PreviewPanel({ state, zoom, setZoom }) {
  const renderTemplate = () => {
    switch (state.template) {
      case 'dark':
        return <DarkPro state={state} />;
      case 'vibrant':
        return <Vibrant state={state} />;
      case 'classic':
        return <Classic state={state} />;
      default:
        return <Minimal state={state} />;
    }
  };

  return (
    <main className="preview-panel">
      <div className="preview-header">
        <span className="preview-label"><span className="live-dot"></span> Live Preview</span>
        <div className="preview-zoom">
          <button onClick={() => setZoom(0.6)} className={`zoom-btn ${zoom === 0.6 ? 'active' : ''}`}>60%</button>
          <button onClick={() => setZoom(0.8)} className={`zoom-btn ${zoom === 0.8 ? 'active' : ''}`}>80%</button>
          <button onClick={() => setZoom(1)} className={`zoom-btn ${zoom === 1 ? 'active' : ''}`}>100%</button>
        </div>
      </div>
      <div className="preview-viewport">
        <div id="portfolio-capture-target" style={{ transform: `scale(${zoom})`, transformOrigin: 'top center', width: '900px', background: '#fff', borderRadius: '8px' }}>
          {renderTemplate()}
        </div>
      </div>
    </main>
  );
}

export default PreviewPanel;