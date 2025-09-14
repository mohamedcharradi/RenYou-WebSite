import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Home/LandingPage";
import OurDoctors from "./pages/Our Doctor/OurDoctors";
import Podcast from "./pages/Podcast/Podcasts";
import AboutUs from "./pages/About Us/AboutUs";
import Navbar from "./components/Header/Navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/doctors" element={<OurDoctors />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
