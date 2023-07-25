import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/news/:query" element={<Hero />} />
        {/* <Route path="/news" element={<Hero />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
