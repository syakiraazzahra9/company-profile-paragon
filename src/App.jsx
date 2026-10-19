import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

export default function App() {
  return (
    <Router>
      {}
      <div className="font-sans font-medium text-slate-800 bg-[#FDFBF7] min-h-screen flex flex-col w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}