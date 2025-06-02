import "./Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import ScrollToTopButton from "./Components/ScrollToTopButton";

function App() {
  return (
    <Router>
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/WordPress_with_Frontend_Development_Course" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
