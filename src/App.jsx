import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Home/LandingPage";
import OurDoctors from "./pages/Our Doctor/OurDoctors";
import Podcast from "./pages/Podcast/Podcasts";
import AboutUs from "./pages/About Us/AboutUs";
import Navbar from "./components/Header/Navbar";
import WaitingListModal from "./modal/WaitingListModal/WaitingListModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <WaitingListModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/doctors" element={<OurDoctors />} />
        <Route path="/podcasts" element={<Podcast />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
