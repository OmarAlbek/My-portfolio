import './App.css';
import './Fonts/Fonts.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import BottomNavBar from './Components/BottomNavBar';
import Silk from './Components/Silk';
import Cv from './pages/Cv';
import Contact from './pages/Contact';
import Videos from './pages/Videos';
import ScrollToTop from './Components/ScrollToTop'; // ✅ إضافة

function App() {
  return (
    <div className="App">
      <div className="silk-background">
        <Silk
          speed={5}
          scale={1}
          color="#7250ff"
          background="#0f0f1a"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className="page-content-wrapper">
        <Router>
          <ScrollToTop /> {/* ✅ إدراج الكومبوننت هنا */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <BottomNavBar />
        </Router>
      </div>
    </div>
  );
}

export default App;
