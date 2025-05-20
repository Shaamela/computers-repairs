import './App.css';
import Header from './header';
import Header_2 from './header_2';
import About from './about';
import Footer from './footer';
import Contact from './contact';
import Carousel from './carousel';
import Tech from './Tech';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { motion} from 'framer-motion';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header_2  />
      <div>
      <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/tech" element={<Tech />} />

      </Routes>        
    </div>
        <Footer />
      
    </div>
    </Router>
    
  );
}

export default App;
