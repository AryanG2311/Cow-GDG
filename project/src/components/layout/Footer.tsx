import { Heart } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });
  
  const footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Contact", href: "#" }
  ];

  return (
    <footer 
      ref={footerRef}
      className="bg-green-50 border-t border-green-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <motion.p 
            className="flex items-center text-green-800"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Made with 
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ 
                delay: 0.5,
                type: "spring", 
                stiffness: 500,
                damping: 10
              }}
              whileHover={{ 
                scale: 1.2,
                rotate: [0, 10, -10, 10, 0],
                transition: { duration: 0.5 }
              }}
            >
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" />
            </motion.div> 
            for farmers
          </motion.p>
          
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {footerLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-green-700 hover:text-green-900 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.5 + (index * 0.1)
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-sm text-green-600"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ 
              letterSpacing: "0.5px",
              transition: { duration: 0.3 }
            }}
          >
            © {new Date().getFullYear()} Cow Breed Advisor. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;