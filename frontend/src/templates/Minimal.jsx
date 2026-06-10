import React from 'react';

function Minimal({ state }) {
  const { personal, education, experience, projects, certificates, contact, customColors } = state;
  const accent = customColors.accent || '#111111';
  const currentFont = customColors.font || 'sans-serif';

  return (
    <div style={{ padding: '50px', color: '#1a1a1a', fontFamily: currentFont, background: '#fafaf9', minHeight: '1000px', borderRadius: '8px' }}>
      
      <header style={{ display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid #e8e8e8', paddingBottom: '24px' }}>
        {personal.photo ? (
          <img src={personal.photo} alt="Profile" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${accent}` }} />
        ) : (
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>👤</div>
        )}
        <div>
          <h1 style={{ fontSize: '32px', margin: 0, color: accent, fontWeight: '700' }}>{personal.name || 'Your Name'}</h1>
          <div style={{ color: '#555', fontSize: '15px', marginTop: '4px' }}>{personal.title || 'Your Title'}</div>
          {(personal.city || personal.country) && (
            <div style={{ color: '#999', fontSize: '12px', marginTop: '4px' }}>📍 {personal.city}{personal.city && personal.country ? ', ' : ''}{personal.country}</div>
          )}
        </div>
      </header>
      
      <main style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: '1fr 240px', gap: '30px' }}>
        
        <div>
          {personal.about && <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#444', marginBottom: '24px' }}>{personal.about}</p>}
          
          {certificates && certificates.length > 0 && certificates.some(c => c.title) && (
            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '700', color: accent, marginBottom: '14px', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>Certificates</h2>
              {certificates.map((cert, idx) => cert.title && (
                <div key={idx} style={{ marginBottom: '18px', borderLeft: `2px solid ${accent}`, paddingLeft: '16px' }}>
                  <div style={{ fontWeight: '700', fontSize: '15px', color: '#1a1a1a' }}>{cert.title}</div>
                  {cert.description && (
                    <div style={{ color: '#555', fontSize: '13px', marginTop: '4px', lineHeight: '1.5' }}>{cert.description}</div>
                  )}
                  {cert.previewUrl && (
                    <a href={cert.previewUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '6px', fontSize: '12px', color: accent, textDecoration: 'underline', fontWeight: '500' }}>View Document ↗</a>
                  )}
                </div>
              ))}
            </section>
          )}

          {projects && projects.length > 0 && projects.some(p => p.name) && (
            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '700', color: accent, marginBottom: '14px', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>Projects</h2>
              {projects.map((proj, idx) => proj.name && (
                <div key={idx} style={{ padding: '16px', border: '1px solid #e8e8e8', borderRadius: '8px', marginBottom: '14px', background: '#fff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontWeight: '700', fontSize: '15px', color: '#1a1a1a' }}>{proj.name}</span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {proj.live && <a href={proj.live} target="_blank" rel="noreferrer" style={{ fontSize: '11px', color: '#111', border: '1px solid #111', padding: '2px 10px', borderRadius: '20px', textDecoration: 'none' }}>Live ↗</a>}
                      {proj.repo && <a href={proj.repo} target="_blank" rel="noreferrer" style={{ fontSize: '11px', color: '#111', border: '1px solid #111', padding: '2px 10px', borderRadius: '20px', textDecoration: 'none' }}>Code ↗</a>}
                    </div>
                  </div>
                  {proj.tech && <div style={{ fontSize: '11px', color: '#888', marginBottom: '6px', fontWeight: '500' }}>{proj.tech}</div>}
                  {proj.desc && <div style={{ fontSize: '13px', color: '#555', lineHeight: '1.6' }}>{proj.desc}</div>}
                </div>
              ))}
            </section>
          )}

          {experience && experience.length > 0 && experience.some(e => e.title || e.company) && (
            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '700', color: accent, marginBottom: '14px', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>Experience</h2>
              {experience.map((exp, idx) => (exp.title || exp.company) && (
                <div key={idx} style={{ marginBottom: '20px', borderLeft: `2px solid ${accent}`, paddingLeft: '16px' }}>
                  <div style={{ fontWeight: '700', fontSize: '15px', color: '#1a1a1a' }}>{exp.title}</div>
                  <div style={{ color: '#555', fontSize: '13px', margin: '2px 0 6px 0' }}>
                    {exp.company} { (exp.from || exp.to) && `· (${exp.from} - ${exp.to})` }
                  </div>
                  {exp.desc && <div style={{ color: '#444', fontSize: '13px', lineHeight: '1.6', whiteSpace: 'pre-line' }}>{exp.desc}</div>}
                </div>
              ))}
            </section>
          )}

          {education && education.length > 0 && education.some(e => e.degree || e.inst) && (
            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '700', color: accent, marginBottom: '14px', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>Education</h2>
              {education.map((edu, idx) => (edu.degree || edu.inst) && (
                <div key={idx} style={{ marginBottom: '18px', borderLeft: `2px solid ${accent}`, paddingLeft: '16px' }}>
                  <div style={{ fontWeight: '700', fontSize: '15px', color: '#1a1a1a' }}>{edu.degree}</div>
                  <div style={{ color: '#555', fontSize: '13px', marginTop: '2px' }}>
                    {edu.inst} { (edu.from || edu.to) && `· (${edu.from} - ${edu.to})` }
                  </div>
                  {edu.desc && <div style={{ color: '#777', fontSize: '12.5px', marginTop: '6px', lineHeight: '1.5' }}>{edu.desc}</div>}
                </div>
              ))}
            </section>
          )}
        </div>

        <aside style={{ borderLeft: '1px solid #eee', paddingLeft: '20px' }}>
          
          {personal.skills && personal.skills.length > 0 && personal.skills[0] !== "" && (
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#999', marginBottom: '12px', fontWeight: '700' }}>Skills</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {personal.skills.map((sk, i) => (
                  <span key={i} style={{ background: '#f2f2f0', color: '#333', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '500' }}>{sk}</span>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: '20px' }}>
            <h3 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#999', marginBottom: '12px', fontWeight: '700' }}>Connect</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#444' }}>
              {contact.email && <div style={{ wordBreak: 'break-all' }}>✉ {contact.email}</div>}
              {contact.phone && <div>📞 {contact.phone}</div>}
              {contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer" style={{ color: accent, textDecoration: 'none' }}>🔗 LinkedIn ↗</a>}
              {contact.github && <a href={contact.github} target="_blank" rel="noreferrer" style={{ color: accent, textDecoration: 'none' }}>🐙 GitHub ↗</a>}
              {contact.twitter && <a href={contact.twitter} target="_blank" rel="noreferrer" style={{ color: accent, textDecoration: 'none' }}>🐦 Twitter / X ↗</a>}
            </div>
          </div>
        </aside>

      </main>
    </div>
  );
}

export default Minimal;