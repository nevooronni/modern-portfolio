import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to} style={{ position: 'relative', textDecoration: 'none', color: isActive ? '#fff' : 'var(--text-secondary)', fontWeight: 500, padding: '0.5rem 0' }}>
      {children}
      {isActive && (
        <motion.div
          layoutId="navbar-indicator"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'var(--accent-gradient)',
            borderRadius: '2px'
          }}
        />
      )}
    </Link>
  );
};

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 2rem',
        height: 'var(--nav-height)',
        alignItems: 'center',
        background: 'rgba(10, 10, 10, 0.6)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}
    >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className="text-gradient" style={{ fontSize: '1.8rem', fontWeight: '800', margin: 0 }}>NO</h1>
      </Link>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <NavLink to="/">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </motion.nav>
  );
};

export default Navbar;
