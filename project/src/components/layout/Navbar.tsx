import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showAlert } from '../../store/alertSlice';
import { logout } from '../../store/authSlice';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';
import { Cog as Cow,User } from 'lucide-react';
import axios from 'axios';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleSignOut = async () => {
    try {
      await axios.get("http://localhost:4200/api/owners/signOut")
      .then(() =>{
        dispatch(logout());
        dispatch(showAlert({
          type: 'info',
          message: 'You have been signed out successfully.',
        }));
        setIsMenuOpen(false);
        navigate('/signIn');
      })
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Cow className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-gray-900">
                Cow Breed Advisor
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/allcows"
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              View-All
            </Link>
            <Link
              to="/form"
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              Get Recommendation
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/news"
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              News
            </Link>
            <Link
              to="/quiz"
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              Quiz
            </Link>
            <div className="relative">
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <User className="h-6 w-6 text-gray-600" />
            </button>

            {isMenuOpen && (
              <div className="relative right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                {!isAuthenticated ? (
                  <>
                    <button
                      onClick={() => {
                        navigate('/signIn');
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        navigate('/signUp');
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Up
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                )}
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;