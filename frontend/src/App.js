import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageTextSection from './components/ImageTextSection';
import HeroSection from './components/HeroSection';
import ScrollingSection from './components/ScrollingSection';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Session from './pages/Session';
import Contact from './pages/Contact';

function App() {
  return (
<>
  <Router>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/about-me" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/session" element ={<Session/>}/>
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </Router>
</>

  );
}

export default App;
