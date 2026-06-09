import React from 'react';

function FormPanel({ state, setState, activeTab, setActiveTab }) {
  const tabs = ['personal', 'education', 'experience', 'projects', 'certificates', 'contact'];

  const updatePersonal = (field, val) => {
    setState({ ...state, personal: { ...state.personal, [field]: val } });
  };

  const handleTemplateSelect = (tmplName) => {
    setState({ ...state, template: tmplName });
  };

  const handleFontChange = (fontName) => {
    setState({ ...state, customColors: { ...state.customColors, font: fontName } });
  };

  const addEdu = () => setState({ ...state, education: [...state.education, { degree: '', inst: '', from: '', to: '', desc: '' }] });
  const addExp = () => setState({ ...state, experience: [...state.experience, { title: '', company: '', from: '', to: '', desc: '' }] });
  const addProj = () => setState({ ...state, projects: [...state.projects, { name: '', tech: '', desc: '', live: '', repo: '' }] });
  const addCert = () => setState({ ...state, certificates: [...state.certificates, { title: '', description: '', previewUrl: '' }] });

  return (
    <aside className="form-panel">
      <nav className="tab-nav">
        {tabs.map((t) => (
          <button key={t} className={`tab-btn ${activeTab === t ? 'active' : ''}`} onClick={() => setActiveTab(t)}>
            <span className="tab-icon">
              {t==='personal'&&'👤'}{t==='education'&&'🎓'}{t==='experience'&&'💼'}{t==='projects'&&'🚀'}{t==='certificates'&&'📜'}{t==='contact'&&'✉️'}
            </span>
            <span style={{ textTransform: 'capitalize' }}>{t}</span>
          </button>
        ))}
      </nav>

      <div className="form-content" style={{ padding: '20px' }}>
        {/* ================= PERSONAL INFO ================= */}
        {activeTab === 'personal' && (
          <section className="tab-section active">
            <h2 className="section-title">Personal Info</h2>
            <div className="template-chooser">
              <p className="field-label">Choose Template</p>
              <div className="template-grid">
                {['minimal', 'dark', 'vibrant', 'classic'].map((t) => (
                  <div key={t} className={`tmpl-card ${state.template === t ? 'active' : ''}`} onClick={() => handleTemplateSelect(t)}>
                    <div className={`tmpl-preview ${t}-prev`}><div className="tp-bar"></div><div className="tp-line"></div><div className="tp-line short"></div></div>
                    <span style={{ textTransform: 'capitalize' }}>{t === 'dark' ? 'Dark Pro' : t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'var(--bg3)', padding: '14px', borderRadius: 'var(--radius-sm)', marginBottom: '20px', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: '700', marginBottom: '10px' }}>◈ Structure & Style Customizer</p>
              <div className="field-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div className="field"><label>Accent Color</label><input type="color" value={state.customColors.accent || '#111111'} onChange={(e) => setState({...state, customColors: {...state.customColors, accent: e.target.value}})} style={{ padding: '2px', height: '38px', cursor: 'pointer', width: '100%' }} /></div>
                <div className="field"><label>Font Typography</label><select value={state.customColors.font || 'sans-serif'} onChange={(e) => handleFontChange(e.target.value)} style={{ width: '100%', height: '38px' }}><option value="sans-serif">Modern Sans (DM Sans)</option><option value="'Lora', serif">Classic Lora (Serif)</option><option value="'Syne', sans-serif">Syne Bold (Editorial)</option><option value="'Plus Jakarta Sans', sans-serif">Jakarta Sleek</option></select></div>
              </div>
            </div>
            <div className="field-group">
              <div className="field"><label>Full Name *</label><input type="text" placeholder="enter name" value={state.personal.name || ''} onChange={(e) => updatePersonal('name', e.target.value)}/></div>
              <div className="field"><label>Job Title / Role *</label><input type="text" placeholder="enter role" value={state.personal.title || ''} onChange={(e) => updatePersonal('title', e.target.value)}/></div>
              <div className="field"><label>About Me</label><textarea placeholder="write about yourself" rows="4" value={state.personal.about || ''} onChange={(e) => updatePersonal('about', e.target.value)}></textarea></div>
              
              {/* Changed back to Profile Photo URL Input */}
              <div className="field">
                <label>Profile Photo URL</label>
                <input type="url" placeholder="enter profile photo url" value={state.personal.photo || ''} onChange={(e) => updatePersonal('photo', e.target.value)}/>
              </div>

              <div className="field-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div className="field"><label>City</label><input type="text" placeholder="enter city" value={state.personal.city || ''} onChange={(e) => updatePersonal('city', e.target.value)} style={{ width: '100%' }}/></div>
                <div className="field"><label>Country</label><input type="text" placeholder="enter country" value={state.personal.country || ''} onChange={(e) => updatePersonal('country', e.target.value)} style={{ width: '100%' }}/></div>
              </div>
              <div className="field"><label>Skills</label><input type="text" placeholder="enter skills" value={state.personal.skills ? state.personal.skills.join(', ') : ''} onChange={(e) => setState({ ...state, personal: { ...state.personal, skills: e.target.value.split(',').map(s=>s.trim()) } })}/></div>
            </div>
            <button className="btn-next" style={{ width: '100%', marginTop: '16px' }} onClick={() => setActiveTab('education')}>Next: Education →</button>
          </section>
        )}

        {/* ================= EDUCATION ================= */}
        {activeTab === 'education' && (
          <section className="tab-section active">
            <h2 className="section-title">Education</h2>
            <div id="educationList">
              {state.education.map((edu, idx) => (
                <div key={idx} className="dynamic-card">
                  <div className="card-header"><span className="card-number">Education #{idx + 1}</span><button className="btn-remove" onClick={() => setState({ ...state, education: state.education.filter((_, i) => i !== idx) })}>✕ Remove</button></div>
                  <div className="field-group">
                    <div className="field-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div className="field"><label>Degree / Qualification</label><input type="text" placeholder="enter degree" value={edu.degree} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.education]; arr[idx].degree = e.target.value; setState({...state, education: arr}); }}/></div>
                      <div className="field"> <label>Institution</label><input type="text" placeholder="enter institute" value={edu.inst} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.education]; arr[idx].inst = e.target.value; setState({...state, education: arr}); }}/></div>
                    </div>
                    <div className="field-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' }}>
                      <div className="field"><label>Year From</label><input type="text" placeholder="from" value={edu.from} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.education]; arr[idx].from = e.target.value; setState({...state, education: arr}); }}/></div>
                      <div className="field"><label>Year To</label><input type="text" placeholder="till" value={edu.to} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.education]; arr[idx].to = e.target.value; setState({...state, education: arr}); }}/></div>
                    </div>
                    <div className="field" style={{ marginTop: '10px' }}><label>Description (optional)</label><textarea rows="2" placeholder="enter achievements" value={edu.desc} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.education]; arr[idx].desc = e.target.value; setState({...state, education: arr}); }}/></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-add" onClick={addEdu}>+ Add Education</button>
            <div className="nav-btns"><button className="btn-prev" onClick={() => setActiveTab('personal')}>← Personal</button><button className="btn-next" onClick={() => setActiveTab('experience')}>Next: Experience →</button></div>
          </section>
        )}

        {/* ================= EXPERIENCE ================= */}
        {activeTab === 'experience' && (
          <section className="tab-section active">
            <h2 className="section-title">Work Experience</h2>
            <div id="experienceList">
              {state.experience.map((exp, idx) => (
                <div key={idx} className="dynamic-card">
                  <div className="card-header"><span className="card-number">Experience #{idx + 1}</span><button className="btn-remove" onClick={() => setState({ ...state, experience: state.experience.filter((_, i) => i !== idx) })}>✕ Remove</button></div>
                  <div className="field-group">
                    <div className="field-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div className="field"><label>Job Title</label><input type="text" placeholder="enter job role" value={exp.title || ''} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.experience]; arr[idx].title = e.target.value; setState({...state, experience: arr}); }}/></div>
                      <div className="field"><label>Company</label><input type="text" placeholder="enter company" value={exp.company || ''} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.experience]; arr[idx].company = e.target.value; setState({...state, experience: arr}); }}/></div>
                    </div>
                    <div className="field-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' }}>
                      <div className="field"><label>Start Date</label><input type="text" placeholder="start from" value={exp.from || ''} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.experience]; arr[idx].from = e.target.value; setState({...state, experience: arr}); }}/></div>
                      <div className="field"><label>End Date</label><input type="text" placeholder="till" value={exp.to || ''} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.experience]; arr[idx].to = e.target.value; setState({...state, experience: arr}); }}/></div>
                    </div>
                    <div className="field" style={{ marginTop: '10px' }}><label>Responsibilities</label><textarea rows="3" placeholder="describe your role and impact" value={exp.desc || ''} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.experience]; arr[idx].desc = e.target.value; setState({...state, experience: arr}); }}/></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-add" onClick={addExp}>+ Add Experience</button>
            <div className="nav-btns"><button className="btn-prev" onClick={() => setActiveTab('education')}>← Education</button><button className="btn-next" onClick={() => setActiveTab('projects')}>Next: Projects →</button></div>
          </section>
        )}

        {/* ================= PROJECTS ================= */}
        {activeTab === 'projects' && (
          <section className="tab-section active">
            <h2 className="section-title">Projects</h2>
            <div id="projectList">
              {state.projects.map((proj, idx) => (
                <div key={idx} className="dynamic-card">
                  <div className="card-header"><span className="card-number">Project #{idx + 1}</span><button className="btn-remove" onClick={() => setState({ ...state, projects: state.projects.filter((_, i) => i !== idx) })}>✕ Remove</button></div>
                  <div className="field-group">
                    <div className="field-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div className="field"><label>Project Name</label><input type="text" placeholder="enter project name" value={proj.name || ''} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.projects]; arr[idx].name = e.target.value; setState({...state, projects: arr}); }}/></div>
                      <div className="field"><label>Tech Stack</label><input type="text" placeholder="enter tech stack" value={proj.tech || ''} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.projects]; arr[idx].tech = e.target.value; setState({...state, projects: arr}); }}/></div>
                    </div>
                    <div className="field" style={{ marginTop: '10px' }}><label>Description</label><textarea rows="3" placeholder="describe your project" value={proj.desc || ''} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.projects]; arr[idx].desc = e.target.value; setState({...state, projects: arr}); }}/></div>
                    <div className="field-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' }}>
                      <div className="field"><label>Live URL</label><input type="url" placeholder="project url" value={proj.live || ''} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.projects]; arr[idx].live = e.target.value; setState({...state, projects: arr}); }}/></div>
                      <div className="field"><label>GitHub URL</label><input type="url" placeholder="project github url" value={proj.repo || ''} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.projects]; arr[idx].repo = e.target.value; setState({...state, projects: arr}); }}/></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-add" onClick={addProj}>+ Add Project</button>
            <div className="nav-btns"><button className="btn-prev" onClick={() => setActiveTab('experience')}>← Experience</button><button className="btn-next" onClick={() => setActiveTab('certificates')}>Next: Certificates →</button></div>
          </section>
        )}

        {/* ================= CERTIFICATES ================= */}
        {activeTab === 'certificates' && (
          <section className="tab-section active">
            <h2 className="section-title">Certificates</h2>
            <div id="certificateList">
              {state.certificates.map((cert, idx) => (
                <div key={idx} className="dynamic-card">
                  <div className="card-header"><span className="card-number">Certificate #{idx + 1}</span><button className="btn-remove" onClick={() => setState({ ...state, certificates: state.certificates.filter((_, i) => i !== idx) })}>✕ Remove</button></div>
                  <div className="field-group">
                    <div className="field"><label>Certificate Title</label><input type="text" placeholder="e.g. MERN Stack Developer" value={cert.title || ''} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.certificates]; arr[idx].title = e.target.value; setState({...state, certificates: arr}); }}/></div>
                    
                    {/* Changed back to Certificate Document URL Input instead of File field */}
                    <div className="field" style={{ marginTop: '10px' }}>
                      <label>Certificate Document URL (Image/PDF)</label>
                      <input 
                        type="url" 
                        placeholder="enter certificate document link" 
                        value={cert.previewUrl || ''} 
                        onChange={(e) => { 
                          const arr = [...state.certificates]; 
                          arr[idx].previewUrl = e.target.value; 
                          setState({...state, certificates: arr}); 
                        }}
                      />
                    </div>

                    <div className="field" style={{ marginTop: '10px' }}><label>Short Description</label><textarea rows="2" placeholder="Describe your achievement..." value={cert.description || ''} style={{ width: '100%' }} onChange={(e) => { const arr = [...state.certificates]; arr[idx].description = e.target.value; setState({...state, certificates: arr}); }}/></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-add" onClick={addCert}>+ Add Certificate</button>
            <div className="nav-btns"><button className="btn-prev" onClick={() => setActiveTab('projects')}>← Projects</button><button className="btn-next" onClick={() => setActiveTab('contact')}>Next: Contact →</button></div>
          </section>
        )}

        {/* ================= CONTACT SECTION ================= */}
        {activeTab === 'contact' && (
          <section className="tab-section active">
            <h2 className="section-title">Contact & Social</h2>
            <div className="field-group">
              <div className="field"><label>Email</label><input type="email" placeholder="enter email" value={state.contact.email || ''} onChange={(e) => setState({...state, contact: {...state.contact, email: e.target.value}})} /></div>
              <div className="field"><label>Phone</label><input type="tel" placeholder="enter phone no." value={state.contact.phone || ''} onChange={(e) => setState({...state, contact: {...state.contact, phone: e.target.value}})} /></div>
              <div className="field"><label>GitHub URL</label><input type="url" placeholder="your github url" value={state.contact.github || ''} onChange={(e) => setState({...state, contact: {...state.contact, github: e.target.value}})} /></div>
              <div className="field"><label>LinkedIn URL</label><input type="url" placeholder="your linkedin url" value={state.contact.linkedin || ''} onChange={(e) => setState({...state, contact: {...state.contact, linkedin: e.target.value}})} /></div>
              <div className="field"><label>Twitter / X URL</label><input type="url" placeholder="your twitter/x url" value={state.contact.twitter || ''} onChange={(e) => setState({...state, contact: {...state.contact, twitter: e.target.value}})} /></div>
            </div>

            {/* Restored Clean Grid: Big generate button removed completely */}
            <div className="nav-btns" style={{ marginTop: '20px' }}>
              <button className="btn-prev" style={{ width: '100%' }} onClick={() => setActiveTab('certificates')}>
                ← Projects
              </button>
            </div>
          </section>
        )}
      </div>
    </aside>
  );
}

export default FormPanel;