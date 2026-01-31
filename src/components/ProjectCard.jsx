import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-card"
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ height: '220px', overflow: 'hidden' }}>
        <img 
          src={`/img/${project.image}`} 
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
        />
      </div>
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>{project.title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.5', flex: 1 }}>
          {project.shortDescription}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {project.techStack.slice(0, 3).map(tech => (
            <span key={tech} style={{ 
              background: 'rgba(255,255,255,0.05)', 
              padding: '4px 10px', 
              borderRadius: '20px', 
              fontSize: '0.8rem',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-secondary)'
            }}>
              {tech}
            </span>
          ))}
        </div>
        <Link to={`/project/${project.id}`} className="btn-primary" style={{ textDecoration: 'none', textAlign: 'center' }}>
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
