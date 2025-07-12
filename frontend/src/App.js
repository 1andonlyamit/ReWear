import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Landing from './pages/landingPage';

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/portfolio" element={<Work />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
