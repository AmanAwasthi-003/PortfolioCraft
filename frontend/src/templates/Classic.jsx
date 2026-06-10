import React from 'react';

function Classic({ state }) {
  const { personal, education, experience, projects, certificates, contact, customColors } = state;
  const classicAccent = customColors.accent || '#2d6a4f';
  const currentFont = customColors.font || 'serif';
  const hrStyle = { border: 'none', borderTop: `1px solid ${classicAccent}33`, margin: '12px 0' };

  return (
    <div style={{ background: '#fff', color: '#1a1a1a', minHeight: '1000px', fontFamily: currentFont, borderRadius: '8px', overflow: 'hidden' }}>
      <header style={{ background: classicAccent, color: '#fff', padding: '30px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '30px', fontWeight: '700', margin: 0 }}>{personal.name || 'Your Name'}</h1>
          <div style={{ fontSize: '14px', opacity: 0.85, marginTop: '4px', fontStyle: 'italic' }}>{personal.title || 'Your Title'}</div>
          {(personal.city || personal.country) && (
            <div style={{ fontSize: '12px', opacity: 0.75, marginTop: '4px' }}>📍 {personal.city}{personal.city && personal.country ? ', ' : ''}{personal.country}</div>
          )}
        </div>
        {personal.photo && (
          <img src={personal.photo} alt="Profile" style={{ width: '75px', height: '75px', borderRadius: '6px', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.5)' }} />
        )}
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 220px' }}>
        <main style={{ padding: '30px 40px' }}>
          {personal.about && (
            <section style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '14px', color: classicAccent, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Profile</h2>
              <hr style={hrStyle} />
              <p style={{ color: '#444', lineHeight: '1.7', fontSize: '13.5px', margin: 0 }}>{personal.about}</p>
            </section>
          )}

          {certificates && certificates.length > 0 && certificates.some(c => c.title) && (
            <section style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '14px', color: classicAccent, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Certificates</h2>
              <hr style={hrStyle} />
              {certificates.map((cert, idx) => cert.title && (
                <div key={idx} style={{ marginBottom: '14px' }}>
                  <div style={{ fontWeight: '700', fontSize: '14px', color: '#1a1a1a' }}>{cert.title}</div>
                  {cert.description && <div style={{ color: '#555', fontSize: '13px', marginTop: '2px' }}>{cert.description}</div>}
                  {cert.previewUrl && (
                    <a href={cert.previewUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '4px', fontSize: '12px', color: classicAccent, textDecoration: 'underline' }}>View Document ↗</a>
                  )}
                </div>
              ))}
            </section>
          )}

          {projects && projects.length > 0 && projects.some(p => p.name) && (
            <section style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '14px', color: classicAccent, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Projects</h2>
              <hr style={hrStyle} />
              {projects.map((proj, idx) => proj.name && (
                <div key={idx} style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '14px' }}>{proj.name}</span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {proj.live && <a href={proj.live} target="_blank" rel="noreferrer" style={{ fontSize: '11px', color: classicAccent, textDecoration: 'underline' }}>Live ↗</a>}
                      {proj.repo && <a href={proj.repo} target="_blank" rel="noreferrer" style={{ fontSize: '11px', color: classicAccent, textDecoration: 'underline' }}>Code ↗</a>}
                    </div>
                  </div>
                  {proj.tech && <div style={{ fontSize: '11px', color: '#888', fontStyle: 'italic', margin: '2px 0' }}>{proj.tech}</div>}
                  {proj.desc && <div style={{ fontSize: '13px', color: '#555', lineHeight: '1.6' }}>{proj.desc}</div>}
                </div>
              ))}
            </section>
          )}

          {experience && experience.length > 0 && experience.some(e => e.title || e.company) && (
            <section style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '14px', color: classicAccent, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Experience</h2>
              <hr style={hrStyle} />
              {experience.map((exp, idx) => (exp.title || exp.company) && (
                <div key={idx} style={{ marginBottom: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontWeight: '700', fontSize: '15px', color: '#1a1a1a' }}>{exp.title}</span>
                    { (exp.from || exp.to) && <span style={{ color: '#666', fontSize: '12px' }}>{exp.from} – {exp.to}</span> }
                  </div>
                  <div style={{ color: classicAccent, fontSize: '13px', fontWeight: '600', marginTop: '2px' }}>{exp.company}</div>
                  {exp.desc && <p style={{ color: '#444', fontSize: '13px', marginTop: '6px', lineHeight: '1.7', whiteSpace: 'pre-line' }}>{exp.desc}</p>}
                </div>
              ))}
            </section>
          )}

          {education && education.length > 0 && education.some(e => e.degree || e.inst) && (
            <section style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '14px', color: classicAccent, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Education</h2>
              <hr style={hrStyle} />
              {education.map((edu, idx) => (edu.degree || edu.inst) && (
                <div key={idx} style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontWeight: '700', color: classicAccent, fontSize: '14px' }}>{edu.degree}</span>
                    { (edu.from || edu.to) && <span style={{ color: '#666', fontSize: '12px' }}>{edu.from} – {edu.to}</span> }
                  </div>
                  <div style={{ color: '#555', fontSize: '13px', fontStyle: 'italic', marginTop: '2px' }}>{edu.inst}</div>
                  {edu.desc && <div style={{ color: '#666', fontSize: '12px', marginTop: '4px' }}>{edu.desc}</div>}
                </div>
              ))}
            </section>
          )}
        </main>

        <aside style={{ background: '#f2f8f5', padding: '25px 20px', borderLeft: `1px solid ${classicAccent}22` }}>
          {personal.skills && personal.skills.length > 0 && personal.skills[0] !== "" && (
            <section style={{ marginBottom: '24px' }}>
              <h3 style={{ fontFamily: 'serif', fontSize: '13px', color: classicAccent, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Skills</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {personal.skills.map((sk, i) => (
                  <span key={i} style={{ fontSize: '12px', color: '#333', padding: '3px 0', borderBottom: '1px dashed #cfe8d8' }}>▸ {sk}</span>
                ))}
              </div>
            </section>
          )}

          {contact && Object.values(contact).some(v => v) && (
            <section style={{ marginTop: '10px' }}>
              <h3 style={{ fontFamily: 'serif', fontSize: '13px', color: classicAccent, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Connect</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {contact.email && <span style={{ fontSize: '11.5px', color: '#333', wordBreak: 'break-all' }}>✉ {contact.email}</span>}
                {contact.phone && <span style={{ fontSize: '12px', color: '#333' }}>📞 {contact.phone}</span>}
                {contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: classicAccent, textDecoration: 'none', borderBottom: '1px dashed #cfe8d8', paddingBottom: '3px' }}>▸ LinkedIn ↗</a>}
                {contact.github && <a href={contact.github} target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: classicAccent, textDecoration: 'none', borderBottom: '1px dashed #cfe8d8', paddingBottom: '3px' }}>▸ GitHub ↗</a>}
                {contact.twitter && <a href={contact.twitter} target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: classicAccent, textDecoration: 'none', borderBottom: '1px dashed #cfe8d8', paddingBottom: '3px' }}>▸ Twitter ↗</a>}
              </div>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
}

export default Classic;