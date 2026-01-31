import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to} style={{ position: 'relative', textDecoration: 'none', color: isActive ? 'white' : 'var(--text-secondary)', fontWeight: 500 }}>
      {children}
      {isActive && (
        <motion.div
          layoutId="underline"
          style={{
            position: 'absolute',
            bottom: -4,
            left: 0,
            right: 0,
            height: 2,
            background: 'var(--accent-gradient)'
          }}
        />
      )}
    </Link>
  );
};

const Navbar = () => {
    // ... (rest of the component)
};

export default Navbar;
