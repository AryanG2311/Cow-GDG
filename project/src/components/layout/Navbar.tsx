import { Link, useLocation } from 'react-router-dom';
import { GiCow } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/allcows", label: "View-All" },
    { path: "/form", label: "Get Recommendation" },
    { path: "/about", label: "About" },
    { path: "/info", label: "Info" }
  ];
  
  return (
    <motion.nav 
      className="bg-green-50/90 backdrop-blur-sm shadow-md border-b border-green-100 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.7 }}
                className="bg-green-100 p-2 rounded-full"
              >
                <GiCow className="w-6 h-6 text-green-600 group-hover:text-green-800 transition-colors duration-300" />
              </motion.div>
              <motion.div
                className="flex flex-col"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-xl font-bold text-green-800">Cow Breed Advisor</span>
                <span className="text-xs text-green-600 -mt-1">Find your perfect match</span>
              </motion.div>
            </Link>
          </motion.div>
          
          <div className="flex items-center">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navItems.indexOf(item) * 0.1 }}
                className="relative mx-1"
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${
                    location.pathname === item.path
                      ? "text-green-800"
                      : "text-green-600 hover:text-green-800"
                  }`}
                >
                  {item.label}
                  
                  {hoveredItem === item.path && (
                    <motion.div
                      className="absolute inset-0 bg-green-100/50 rounded-md -z-10"
                      layoutId="hover-indicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
