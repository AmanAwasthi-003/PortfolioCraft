import React from 'react';

function Vibrant({ state }) {
  const { personal, education, experience, projects, certificates, contact, customColors } = state;
  const primaryAccent = customColors.accent || '#6366f1';
  const currentFont = customColors.font || 'sans-serif';

  return (
    <div style={{ background: '#f5f4fe', color: '#1e1b4b', minHeight: '1000px', fontFamily: currentFont, borderRadius: '8px', overflow: 'hidden' }}>
      <header style={{ background: `linear-gradient(135deg, ${primaryAccent} 0%, #ec4899 100%)`, padding: '40px', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        {personal.photo ? (
          <img src={personal.photo} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)' }} />
        ) : (
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px' }}>👤</div>
        )}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '36px', fontWeight: '800', margin: 0 }}>{personal.name || 'Your Name'}</h1>
          <div style={{ fontSize: '16px', opacity: 0.9, marginTop: '5px' }}>{personal.title || 'Your Title'}</div>
          {(personal.city || personal.country) && (
            <div style={{ fontSize: '12px', opacity: 0.75, marginTop: '4px' }}>📍 {personal.city}{personal.city && personal.country ? ', ' : ''}{personal.country}</div>
          )}
        </div>

        {contact && Object.values(contact).some(v => v) && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', marginTop: '10px', fontSize: '13px', opacity: 0.95 }}>
            {contact.email && <span>✉ {contact.email}</span>}
            {contact.phone && <span>📞 {contact.phone}</span>}
            {contact.linkedin && <a href= {contact.linkedin} target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>LinkedIn</a>}
            {contact.github && <a href={contact.github} target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>GitHub</a>}
            {contact.twitter && <a href={contact.twitter} target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>𝕏</a>}
          </div>
        )}
      </header>

      <main style={{ padding: '30px' }}>
        {personal.about && (
          <section style={{ background: '#fff', borderRadius: '12px', padding: '20px', marginBottom: '25px', boxShadow: '0 2px 12px rgba(99,102,241,0.05)' }}>
            <h2 style={{ fontSize: '12px', textTransform: 'uppercase', color: primaryAccent, letterSpacing: '1.5px', marginBottom: '8px' }}>About Me</h2>
            <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{personal.about}</p>
          </section>
        )}

        {personal.skills && personal.skills.length > 0 && personal.skills[0] !== "" && (
          <section style={{ background: '#fff', borderRadius: '12px', padding: '20px', marginBottom: '25px', boxShadow: '0 2px 12px rgba(99,102,241,0.05)' }}>
            <h2 style={{ fontSize: '12px', textTransform: 'uppercase', color: primaryAccent, letterSpacing: '1.5px', marginBottom: '12px' }}>Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {personal.skills.map((sk, i) => (
                <span key={i} style={{ background: `linear-gradient(135deg, ${primaryAccent}11, #ec489911)`, color: primaryAccent, padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>{sk}</span>
              ))}
            </div>
          </section>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
          <div>
            {certificates && certificates.length > 0 && certificates.some(c => c.title) && (
              <section style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 12px rgba(99,102,241,0.05)', height: '100%' }}>
                <h2 style={{ fontSize: '12px', textTransform: 'uppercase', color: primaryAccent, letterSpacing: '1.5px', marginBottom: '14px' }}>Certificates</h2>
                {certificates.map((cert, i) => cert.title && (
                  <div key={i} style={{ background: '#f8f6ff', padding: '14px', borderRadius: '10px', marginBottom: '12px' }}>
                    <div style={{ fontStyle: '700', fontWeight: '700', color: '#4c1d95', fontSize: '14px' }}>{cert.title}</div>
                    {cert.description && <p style={{ color: '#666', fontSize: '12px', margin: '4px 0 0 0' }}>{cert.description}</p>}
                    {cert.previewUrl && <a href={cert.previewUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '6px', fontSize: '11px', color: primaryAccent, textDecoration: 'none', fontWeight: '600' }}>View Doc ↗</a>}
                  </div>
                ))}
              </section>
            )}
          </div>

          <div>
            {education && education.length > 0 && education.some(e => e.degree || e.inst) && (
              <section style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 12px rgba(99,102,241,0.05)', height: '100%' }}>
                <h2 style={{ fontSize: '12px', textTransform: 'uppercase', color: primaryAccent, letterSpacing: '1.5px', marginBottom: '12px' }}>Education</h2>
                {education.map((edu, i) => (edu.degree || edu.inst) && (
                  <div key={i} style={{ background: '#fafafa', padding: '12px', borderRadius: '10px', marginBottom: '10px' }}>
                    <div style={{ fontWeight: '700', color: '#4c1d95', fontSize: '13.5px' }}>{edu.degree}</div>
                    <div style={{ color: '#7c3aed', fontSize: '12px' }}>{edu.inst}</div>
                    { (edu.from || edu.to) && <div style={{ fontSize: '11px', color: '#999' }}>{edu.from} - {edu.to}</div> }
                    {edu.desc && <p style={{ color: '#666', fontSize: '12px', marginTop: '4px' }}>{edu.desc}</p>}
                  </div>
                ))}
              </section>
            )}
          </div>
        </div>

        {projects && projects.length > 0 && projects.some(p => p.name) && (
          <section style={{ marginBottom: '25px' }}>
            <h2 style={{ fontSize: '12px', textTransform: 'uppercase', color: primaryAccent, letterSpacing: '1.5px', marginBottom: '16px' }}>Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              {projects.map((proj, idx) => proj.name && (
                <div key={idx} style={{ background: '#fff', borderRadius: '14px', padding: '20px', boxShadow: '0 2px 16px rgba(99,102,241,0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ fontWeight: '700', fontSize: '15px', color: '#1e1b4b' }}>{proj.name}</span>
                    <div style={{ display: 'flex', gap: '6px', flexShrink: 0, marginLeft: '10px' }}>
                      {proj.live && <a href={proj.live} target="_blank" rel="noreferrer" style={{ fontSize: '11px', color: '#fff', background: `linear-gradient(135deg, ${primaryAccent}, #ec4899)`, padding: '4px 12px', borderRadius: '20px', textDecoration: 'none' }}>Live ↗</a>}
                      {proj.repo && <a href={proj.repo} target="_blank" rel="noreferrer" style={{ fontSize: '11px', color: primaryAccent, border: `1px solid ${primaryAccent}`, padding: '4px 12px', borderRadius: '20px', textDecoration: 'none' }}>Code</a>}
                    </div>
                  </div>
                  {proj.tech && <div style={{ fontSize: '11px', color: primaryAccent, fontWeight: '600', margin: '6px 0' }}>{proj.tech}</div>}
                  {proj.desc && <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.7' }}>{proj.desc}</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        {experience && experience.length > 0 && experience.some(e => e.title || e.company) && (
          <section style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 12px rgba(99,102,241,0.05)' }}>
            <h2 style={{ fontSize: '12px', textTransform: 'uppercase', color: primaryAccent, letterSpacing: '1.5px', marginBottom: '16px' }}>Experience</h2>
            {experience.map((exp, i) => (exp.title || exp.company) && (
              <div key={i} style={{ marginBottom: '20px', paddingBottom: i !== experience.length - 1 ? '16px' : '0', borderBottom: i !== experience.length - 1 ? '1px dashed #eee' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '700', fontSize: '15px', color: '#1e1b4b' }}>{exp.title}</span>
                  { (exp.from || exp.to) && <span style={{ fontSize: '11px', color: primaryAccent, background: '#f3e8ff', padding: '3px 10px', borderRadius: '20px' }}>{exp.from} – {exp.to}</span> }
                </div>
                <div style={{ color: primaryAccent, fontSize: '13px', marginTop: '4px', fontWeight: '500' }}>{exp.company}</div>
                {exp.desc && <p style={{ color: '#555', fontSize: '13px', marginTop: '10px', lineHeight: '1.7', whiteSpace: 'pre-line' }}>{exp.desc}</p>}
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

export default Vibrant;