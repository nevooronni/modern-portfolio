import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ 
        padding: '4rem 2rem', 
        maxWidth: '800px', 
        margin: '0 auto',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-gradient"
        style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: 800 }}
      >
        Get In Touch
      </motion.h1>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.6' }}
      >
        Want to reach out or collaborate on a project? <br />
        Just send an email to the address below and we'll talk. <br />
        Or you can check out my LinkedIn.
      </motion.p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
        
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card"
          style={{ width: '100%', maxWidth: '500px', padding: '2rem', borderRadius: '16px' }}
        >
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '0.9rem', letterSpacing: '2px' }}>EMAIL</h3>
            <a href="mailto:nevooronni@gmail.com" style={{ 
                fontSize: '1.5rem', color: 'white', textDecoration: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                fontWeight: 600
            }}>
                <FaEnvelope /> nevooronni@gmail.com
            </a>
        </motion.div>

        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card"
          style={{ width: '100%', maxWidth: '500px', padding: '2rem', borderRadius: '16px' }}
        >
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '0.9rem', letterSpacing: '2px' }}>LINKEDIN</h3>
            <a href="https://www.linkedin.com/in/neville-oronni-5471699b/" target="_blank" rel="noopener noreferrer" style={{ 
                fontSize: '1.5rem', color: 'white', textDecoration: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                fontWeight: 600
            }}>
                <FaLinkedin /> View Profile
            </a>
        </motion.div>

         <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-card"
          style={{ width: '100%', maxWidth: '500px', padding: '2rem', borderRadius: '16px' }}
        >
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '0.9rem', letterSpacing: '2px' }}>GITHUB</h3>
            <a href="https://github.com/nevooronni" target="_blank" rel="noopener noreferrer" style={{ 
                fontSize: '1.5rem', color: 'white', textDecoration: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                fontWeight: 600
            }}>
                <FaGithub /> View Profile
            </a>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Contact;
