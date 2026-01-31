import { motion } from 'framer-motion';
import { bio, skills } from '../data/content';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}
    >
      <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>About Me</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        <div>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>{bio.title}</h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            {bio.intro}
          </p>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            {bio.about}
          </p>
          
          <button className="btn-primary" style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '1rem'
          }}>
            <FaDownload /> Download Resume
          </button>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Technical Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {skills.map((skill, index) => (
              <motion.span 
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card"
                style={{ 
                  padding: '8px 16px', 
                  borderRadius: '20px',
                  color: 'var(--text-secondary)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
