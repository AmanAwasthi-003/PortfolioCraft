import React from 'react';

function DarkPro({ state }) {
  const { personal, education, experience, projects, certificates, contact, customColors } = state;
  const accentColor = customColors.accent || '#f0b429';
  const currentFont = customColors.font || 'sans-serif';

  return (
    <div style={{ background: '#0d0d12', color: '#e0e0ee', minHeight: '1000px', padding: '40px', fontFamily: currentFont, borderRadius: '8px' }}>
      <header style={{ borderBottom: '1px solid #1e1e2e', paddingBottom: '30px', display: 'flex', alignItems: 'center', gap: '24px' }}>
        {personal.photo ? (
          <img src={personal.photo} alt="Photo" style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', border: `3px solid ${accentColor}` }} />
        ) : (
          <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: '#1a1a22', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', border: `3px solid ${accentColor}` }}>👤</div>
        )}
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', margin: 0 }}>{personal.name || 'Your Name'}</h1>
          <div style={{ color: accentColor, fontSize: '16px', marginTop: '4px', fontWeight: '600' }}>{personal.title || 'Your Title'}</div>
          {(personal.city || personal.country) && (
            <div style={{ color: '#666', fontSize: '13px', marginTop: '4px' }}>📍 {personal.city}{personal.city && personal.country ? ', ' : ''}{personal.country}</div>
          )}
        </div>
      </header>

      <main style={{ display: 'grid', gridTemplateColumns: '1fr 220px', gap: '30px', marginTop: '30px' }}>
        <div>
          {personal.about && (
            <section style={{ marginBottom: '30px', background: '#1a1a22', borderRadius: '8px', padding: '20px', border: '1px solid #252535' }}>
              <h2 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: accentColor, marginBottom: '10px' }}>About</h2>
              <p style={{ color: '#aaa', lineHeight: '1.7', fontSize: '13.5px', margin: 0 }}>{personal.about}</p>
            </section>
          )}

          {certificates && certificates.length > 0 && certificates.some(c => c.title) && (
            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: accentColor, marginBottom: '15px' }}>Certificates</h2>
              {certificates.map((cert, idx) => cert.title && (
                <div key={idx} style={{ marginBottom: '14px', background: '#1a1a22', borderRadius: '8px', padding: '16px', borderLeft: `3px solid ${accentColor}` }}>
                  <div style={{ fontWeight: '700', color: '#f0f0f8', fontSize: '14px' }}>{cert.title}</div>
                  {cert.description && <div style={{ color: '#888', fontSize: '13px', marginTop: '4px', lineHeight: '1.5' }}>{cert.description}</div>}
                  {cert.previewUrl && (
                    <a href={cert.previewUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '8px', fontSize: '12px', color: accentColor, textDecoration: 'none', fontWeight: '600' }}>View Document ↗</a>
                  )}
                </div>
              ))}
            </section>
          )}

          {projects && projects.length > 0 && projects.some(p => p.name) && (
            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: accentColor, marginBottom: '15px' }}>Projects</h2>
              {projects.map((proj, idx) => proj.name && (
                <div key={idx} style={{ background: '#1a1a22', borderRadius: '8px', padding: '18px', marginBottom: '14px', border: '1px solid #2a2a38' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ fontWeight: '700', fontSize: '15px', color: '#f0f0f8' }}>{proj.name}</span>
                    <div style={{ display: 'flex', gap: '8px', flexShrink: 0, marginLeft: '10px' }}>
                      {proj.live && <a href={proj.live} target="_blank" rel="noreferrer" style={{ fontSize: '11px', color: accentColor, border: `1px solid ${accentColor}`, padding: '2px 10px', borderRadius: '20px', textDecoration: 'none', background: `${accentColor}11` }}>Live ↗</a>}
                      {proj.repo && <a href={proj.repo} target="_blank" rel="noreferrer" style={{ fontSize: '11px', color: '#888', border: '1px solid #333', padding: '2px 10px', borderRadius: '20px', textDecoration: 'none' }}>Code ↗</a>}
                    </div>
                  </div>
                  {proj.tech && <div style={{ fontSize: '11px', color: accentColor, margin: '6px 0' }}>{proj.tech}</div>}
                  {proj.desc && <div style={{ fontSize: '13px', color: '#aaa', lineHeight: '1.7' }}>{proj.desc}</div>}
                </div>
              ))}
            </section>
          )}

          {experience && experience.length > 0 && experience.some(e => e.title || e.company) && (
            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: accentColor, marginBottom: '15px' }}>Experience</h2>
              {experience.map((exp, idx) => (exp.title || exp.company) && (
                <div key={idx} style={{ marginBottom: '18px', background: '#1a1a22', borderRadius: '8px', padding: '16px', borderLeft: `3px solid ${accentColor}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '700', fontSize: '15px', color: '#f0f0f8' }}>{exp.title}</span>
                    { (exp.from || exp.to) && <span style={{ fontSize: '11px', color: accentColor }}>{exp.from} – {exp.to}</span> }
                  </div>
                  <div style={{ color: '#888', fontSize: '13px', marginTop: '4px' }}>{exp.company}</div>
                  {exp.desc && <div style={{ color: '#aaa', fontSize: '13px', marginTop: '10px', lineHeight: '1.7', whiteSpace: 'pre-line' }}>{exp.desc}</div>}
                </div>
              ))}
            </section>
          )}

          {education && education.length > 0 && education.some(e => e.degree || e.inst) && (
            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: accentColor, marginBottom: '15px' }}>Education</h2>
              {education.map((edu, idx) => (edu.degree || edu.inst) && (
                <div key={idx} style={{ marginBottom: '16px', background: '#1a1a22', borderRadius: '8px', padding: '14px 16px', borderLeft: `3px solid ${accentColor}` }}>
                  <div style={{ fontWeight: '600', fontSize: '14px', color: '#f0f0f8' }}>{edu.degree}</div>
                  <div style={{ color: '#888', fontSize: '12px', marginTop: '2px' }}>
                    {edu.inst} { (edu.from || edu.to) && `· (${edu.from} - ${edu.to})` }
                  </div>
                  {edu.desc && <div style={{ color: '#666', fontSize: '12px', marginTop: '6px' }}>{edu.desc}</div>}
                </div>
              ))}
            </section>
          )}
        </div>

        <aside style={{ borderLeft: '1px solid #1e1e2e', paddingLeft: '20px' }}>
          {personal.skills && personal.skills.length > 0 && personal.skills[0] !== "" && (
            <section style={{ marginBottom: '25px' }}>
              <h3 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: accentColor, marginBottom: '10px' }}>Skills</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {personal.skills.map((sk, i) => (
                  <span key={i} style={{ background: 'rgba(240,180,41,0.1)', color: accentColor, padding: '4px 10px', borderRadius: '4px', fontSize: '11px' }}>{sk}</span>
                ))}
              </div>
            </section>
          )}

          {contact && Object.values(contact).some(v => v) && (
            <section style={{ marginTop: '25px' }}>
              <h3 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: accentColor, marginBottom: '12px' }}>Connect</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#888' }}>
                {contact.email && <div style={{ wordBreak: 'break-all' }}>✉ {contact.email}</div>}
                {contact.phone && <div>📞 {contact.phone}</div>}
                {contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer" style={{ color: accentColor, textDecoration: 'none' }}>🔗 LinkedIn ↗</a>}
                {contact.github && <a href={contact.github} target="_blank" rel="noreferrer" style={{ color: accentColor, textDecoration: 'none' }}>🐙 GitHub ↗</a>}
                {contact.twitter && <a href={contact.twitter} target="_blank" rel="noreferrer" style={{ color: accentColor, textDecoration: 'none' }}>🐦 𝕏 Twitter ↗</a>}
              </div>
            </section>
          )}
        </aside>
      </main>
    </div>
  );
}

export default DarkPro;