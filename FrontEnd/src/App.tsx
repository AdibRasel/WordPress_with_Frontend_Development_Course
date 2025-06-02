import "./Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
// ভবিষ্যতে অন্য পেজ এড করো যেমন About, Contact, ইত্যাদি

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/WordPress_with_Frontend_Development_Course" element={<Home />} />

        {/* 
          ভবিষ্যতে নতুন Route যোগ করো 
          <Route path="/about" element={<About />} /> 
        */}
      </Routes>
    </Router>
  );
}

export default App;
