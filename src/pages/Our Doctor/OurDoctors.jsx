import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "./OurDoctors.css";

// Import des images docteurs
import DrBayouFeriel from "../../assets/images/DrBayouFeriel.png";
import DrDjebariKhaoula from "../../assets/images/DrDjebariKhaoula.png";
import DrFouratiNadia from "../../assets/images/DrFouratiNadia.png";
import DrGarbiInes from "../../assets/images/DrGarbiInes.png";
import DrRouaiMeriem from "../../assets/images/DrRouaiMeriem.png";
import DrKachouriSabrine from "../../assets/images/DrKachouriSabrine.png";
import TestimonialsSection from "../../components/Testimonials/TestimonialsSection";
import PartnersSection from "../../components/Partners/PartnersSection";
import Footer from "../../components/Footer/Footer";
import ConsultationSection from "../../components/Consultation/ConsultationSection";

export default function OurDoctors() {
  const navigate = useNavigate(); // ✅ hook for navigation

  const doctors = [
    {
      src: DrBayouFeriel,
      alt: "Doctor 1",
      name: "Dr. Bayou Feriel",
      specialty: "Dermatologist Aesthetic doctor",
      location: "Tunis",
      id: "bayou-feriel",
    },
    {
      src: DrDjebariKhaoula,
      alt: "Doctor 2",
      name: "Dr. Djebari Khaoula",
      specialty: "Dermatologist Aesthetic doctor",
      location: "Tunis",
      id: "djebari-khaoula",
    },
    {
      src: DrFouratiNadia,
      alt: "Doctor 3",
      name: "Dr. Fourati Nadia",
      specialty: "Aesthetic doctor",
      location: "Sousse",
      id: "fourati-nadia",
    },
    {
      src: DrGarbiInes,
      alt: "Doctor 4",
      name: "Dr. Garbi Ines",
      specialty: "Dermatologist Aesthetic doctor",
      location: "Le Kram",
      id: "garbi-ines",
    },
    {
      src: DrRouaiMeriem,
      alt: "Doctor 5",
      name: "Dr. Rouai Meriem",
      specialty: "Dermatologist Aesthetic doctor",
      location: "Tunis",
      id: "rouai-meriem",
    },
    {
      src: DrKachouriSabrine,
      alt: "Doctor 6",
      name: "Dr. Kachouri Sabrine",
      specialty: "Aesthetic doctor",
      location: "Monastir",
      id: "kachouani-sabrine",
    },
  ];

  const [searchName, setSearchName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredDoctors = doctors.filter((doc) => {
    return (
      doc.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (specialty === "" ||
        doc.specialty.toLowerCase().includes(specialty.toLowerCase())) &&
      (location === "" || doc.location.toLowerCase() === location.toLowerCase())
    );
  });

  const displayedDoctors = filteredDoctors.slice(0, visibleCount);

  return (
    <>
      {/* Doctors Section */}
      <section className="our-doctors">
        {/* Header avec background */}
        <div className="doctors-header">
          <h2 className="title">
            Expert Advice, <br /> Whenever You Need It
          </h2>
        </div>

        {/* Section Find Your Expert */}
        <div className="find-expert-section">
          <h3 className="find-expert-title">Find Your Expert</h3>

          {/* Filtres */}
          <div className="filters">
            <input
              type="text"
              placeholder="Name an expert"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            >
              <option value="">All specialties</option>
              <option value="dermatologist">Dermatologist</option>
              <option value="aesthetic">Aesthetic doctor</option>
            </select>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Location</option>
              <option value="tunis">Tunis</option>
              <option value="sousse">Sousse</option>
              <option value="monastir">Monastir</option>
              <option value="le kram">Le Kram</option>
            </select>
          </div>
        </div>

        {/* Liste des docteurs */}
        <div className="doctor-list">
          {displayedDoctors.map((doctor, index) => (
            <div
              className="doctor-card"
              key={index}
              onClick={() => navigate(`/doctors/${doctor.id}`)} // ✅ navigate on click
              style={{ cursor: "pointer" }} // pointer cursor for UX
            >
              <img src={doctor.src} alt={doctor.alt} className="doctor-img" />
              <div className="doctor-info-main">
                <h3 className="doctor-name-main">{doctor.name}</h3>
                <p className="doctor-specialty-main">{doctor.specialty}</p>
                <p className="doctor-location-main">{doctor.location}</p>
              </div>
            </div>
          ))}

          {filteredDoctors.length === 0 && (
            <p className="no-results">No doctors found</p>
          )}
        </div>

        {/* Bouton See More */}
        {visibleCount < filteredDoctors.length && (
          <div className="see-more-container">
            <button
              className="btn-see-more"
              onClick={() => setVisibleCount((prev) => prev + 6)}
            >
              See More
            </button>
          </div>
        )}
      </section>

      <ConsultationSection />
      <TestimonialsSection />
      <PartnersSection />
      <Footer />
    </>
  );
}
