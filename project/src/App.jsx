import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import RecommendationForm from './pages/RecommendationForm';
import About from './pages/About';
import Allcows from './pages/Allcows';
import Main from './pages/Main';
import 'react-toastify/dist/ReactToastify.css';
import CompatibilityTest from './pages/Compatiblity';
import CompatibilityDetails from './pages/CompatiblityDtails';
import News from './pages/News';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<RecommendationForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/allcows" element={<Allcows />} />
            <Route path="/Main/:cowId" element={<Main />} />
            <Route path="/compatability" element={<CompatibilityTest />} />
            <Route path="/compatibility-details/:cowId/:bullId" element={<CompatibilityDetails/>} />
            <Route path='/news' element={<News />} />
            <Route path='/quiz' element={<Quiz />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;