import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/content';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <div style={{ padding: '2rem', textAlign: 'center' }}>Project not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#646cff', textDecoration: 'none', marginBottom: '2rem' }}>
        <FaArrowLeft /> Back to Projects
      </Link>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
        <motion.img 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          src={`/img/${project.image}`} 
          alt={project.title}
          style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.5)' }}
        />
        
        <div>
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}
          >
            {project.title}
          </motion.h1>
          <h3 style={{ color: '#aaa', marginBottom: '1.5rem' }}>{project.role}</h3>
          
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
            {project.fullDescription}
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Technologies</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '0.5rem' }}>
              {project.techStack.map(tech => (
                <span key={tech} style={{ 
                  background: 'rgba(100, 108, 255, 0.1)', 
                  color: '#646cff',
                  border: '1px solid rgba(100, 108, 255, 0.3)',
                  padding: '4px 12px', 
                  borderRadius: '20px', 
                  fontSize: '0.9rem' 
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.8rem 1.5rem', background: '#333', color: 'white',
              textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold'
            }}>
              <FaGithub /> Repository
            </a>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.8rem 1.5rem', background: '#646cff', color: 'white',
              textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold'
            }}>
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
