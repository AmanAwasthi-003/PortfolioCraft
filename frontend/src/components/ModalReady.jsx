import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';

function ModalReady({ state, onClose }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getCapturedElement = () => {
    return document.getElementById('portfolio-capture-target');
  };

  // 1. Generate local shareable dynamic Blob link
  const generateBlobUrl = () => {
    const elementContents = getCapturedElement().innerHTML;
    const masterHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${state.personal.name || 'Portfolio'}</title>
          <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
          <style>body { margin:0; padding:0; }</style>
        </head>
        <body>${elementContents}</body>
      </html>
    `;
    const blob = new Blob([masterHtml], { type: 'text/html' });
    return URL.createObjectURL(blob);
  };

  const openInNewTab = () => {
    const url = generateBlobUrl();
    window.open(url, '_blank');
  };

  const copyLink = (e) => {
    const url = generateBlobUrl();
    navigator.clipboard.writeText(url);
    const target = e.target;
    target.textContent = '✓ Copied!';
    setTimeout(() => target.textContent = 'Copy Link', 2000);
  };

  // 2. Download Core Execution Handlers
  const downloadHTML = () => {
    const url = generateBlobUrl();
    const a = document.createElement('a');
    a.href = url;
    a.download = `${state.personal.name || 'portfolio'}.html`;
    a.click();
    setDropdownOpen(false);
  };

  const downloadPDF = () => {
    const element = getCapturedElement();
    const opt = {
      margin:       0.2,
      filename:     `${state.personal.name || 'portfolio'}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
    setDropdownOpen(false);
  };

  const downloadImage = () => {
    const element = getCapturedElement();
    html2canvas(element, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = imgData;
      a.download = `${state.personal.name || 'portfolio'}.png`;
      a.click();
    });
    setDropdownOpen(false);
  };

  return (
    <div className="modal-overlay open" style={{ display: 'flex' }}>
      <div className="modal" style={{ maxWidth: '440px', background: 'var(--bg2)', border: '1px solid var(--border2)', position: 'relative' }}>
        <div className="modal-icon">🎉</div>
        <h3>Your Portfolio is Ready!</h3>
        <p>Click the link below to open or download your generated portfolio.</p>
        
        {/* Main Header Action Button */}
        <button className="portfolio-link" onClick={openInNewTab} style={{ width: '100%', marginBottom: '14px' }}>
          Open My Portfolio →
        </button>

        {/* Video Styled Action Bar Row */}
        <div className="modal-actions" style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '14px' }}>
          <button className="btn-copy" onClick={copyLink} style={{ flex: '1' }}>Copy Link</button>
          <button className="btn-close-modal" onClick={onClose} style={{ flex: '1' }}>Close</button>
        </div>

        {/* Custom Premium Dropdown Selector Feature */}
        <div style={{ position: 'relative', width: '100%', textAlign: 'left' }}>
          <button 
            className="btn-copy" 
            onClick={() => setDropdownOpen(!dropdownOpen)} 
            style={{ width: '100%', background: 'var(--bg3)', borderColor: 'var(--border2)', color: 'var(--text)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px' }}
          >
            <span>◈ Download Portfolio Options</span>
            <span>{dropdownOpen ? '▲' : '▼'}</span>
          </button>
          
          {dropdownOpen && (
            <div style={{ position: 'absolute', top: '100%', left: '0', right: '0', background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: 'var(--radius-sm)', marginTop: '4px', zIndex: '10', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
              <div onClick={downloadPDF} style={{ padding: '10px 14px', cursor: 'pointer', color: 'var(--text2)', borderBottom: '1px solid var(--border)' }} className="dropdown-item-hover">Download as PDF</div>
              <div onClick={downloadHTML} style={{ padding: '10px 14px', cursor: 'pointer', color: 'var(--text2)', borderBottom: '1px solid var(--border)' }} className="dropdown-item-hover">Download as HTML</div>
              <div onClick={downloadImage} style={{ padding: '10px 14px', cursor: 'pointer', color: 'var(--text2)' }} className="dropdown-item-hover">Download as Image</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalReady;