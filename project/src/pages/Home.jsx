import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '../components/common/Button';
import ScrollProgressBar from '../components/common/ScrollBar';

const Home = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <>
      <ScrollProgressBar/>
      <motion.div 
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1580570598977-4b2412d01bbc?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            filter: 'brightness(0.7)',
          }}
          initial={{ filter: 'brightness(0.7) blur(4px)' }}
          animate={{ 
            filter: isHovering 
              ? 'brightness(0.7) blur(0px)' 
              : 'brightness(0.7) blur(4px)' 
          }}
          transition={{ duration: 0.5 }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Find Your Perfect Cow Breed
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Get personalized recommendations based on genetic factors, physical characteristics,
              and health parameters.
            </p>
            <Link to="/form">
              <Button className="text-lg px-8 py-3">
                Start Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;