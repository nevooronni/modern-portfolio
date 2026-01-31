import { motion } from 'framer-motion';
import { bio } from '../data/content';

const Hero = () => {
  return (
    <section style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <motion.img 
        src="/img/nevo_black&white.jpg" 
        alt="Profile"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem' }}
      />
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gradient"
        style={{ fontSize: '3.5rem', marginBottom: '0.5rem', fontWeight: 800 }}
      >
        {bio.name}
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ color: '#646cff', marginBottom: '1rem' }}
      >
        {bio.title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{ color: '#aaa', fontSize: '1.2rem', lineHeight: '1.6' }}
      >
        {bio.intro} <br/> {bio.about}
      </motion.p>
    </section>
  );
};

export default Hero;
