import { useParams, Link } from "react-router-dom";
import "./DoctorDetails.css";

import DrBayouFeriel from "../../assets/images/DrBayouFeriel.png";
import DrDjebariKhaoula from "../../assets/images/DrDjebariKhaoula.png";
import DrFouratiNadia from "../../assets/images/DrFouratiNadia.png";
import DrGarbiInes from "../../assets/images/DrGarbiInes.png";
import DrRouaiMeriem from "../../assets/images/DrRouaiMeriem.png";
import DrKachouriSabrine from "../../assets/images/DrKachouriSabrine.png";
import ConsultationSection from "../../components/Consultation/ConsultationSection";
import TestimonialsSection from "../../components/Testimonials/TestimonialsSection";
import PartnersSection from "../../components/Partners/PartnersSection";
import Footer from "../../components/Footer/Footer";

// =================== DATA ===================
const doctors = {
  "rouai-meriem": {
    name: "Dr. Rouai Meriem",
    specialty: "Dermatologist Aesthetic doctor",
    city: "Tunis",
    about:
      "Dr. Meriem Rouai is a dermatologist based in Mutuelleville. She holds a degree from the Faculty of Medicine of Tunis and is a former Intern at the hospitals of Lille. She offers a full range of treatments for skin, nail, and scalp conditions.",
    acts: [
      "General and aesthetic dermatology",
      "Laser treatments",
      "Hair and nail care",
      "Pediatric dermatology",
      "Dermatological surgery",
    ],
    certifications: ["Diploma 1", "Diploma 2", "Diploma 3", "Diploma 4"],
    workingTime: [
      "Monday - Friday, 09:00 AM - 17:00 PM",
      "Saturday, 09:00 AM - 13:00 PM",
    ],
    email: "meriem.rouai@hotmail.com",
    phone: "+216 99 866 860 | +216 52 866 770",
    address:
      "Soray Médical, 1er étage, 18 Rue Aziza Othmana, Mutuelleville (à côté de la clinique El Amen)",
    image: DrRouaiMeriem,
  },

  "bayou-feriel": {
    name: "Dr. Bayou Feriel",
    specialty: "Dermatologist",
    city: "Tunis",
    about:
      "Dr. Feriel Bayou is specialized in dermatology, providing treatments for skin diseases, acne, and aesthetic care.",
    acts: [
      "General dermatology",
      "Acne treatments",
      "Skin rejuvenation",
      "Laser dermatology",
    ],
    certifications: ["Diploma in Dermatology"],
    workingTime: [
      "Monday - Friday, 08:30 AM - 16:30 PM",
      "Saturday, 09:00 AM - 13:00 PM",
    ],
    email: "feriel.bayou@gmail.com",
    phone: "+216 20 123 456",
    address: "Clinique El Amen, Centre Urbain Nord, Tunis",
    image: DrBayouFeriel,
  },

  "djebari-khaoula": {
    name: "Dr. Djebari Khaoula",
    specialty: "Dermatologist",
    city: "Tunis",
    about:
      "Dr. Khaoula Djebari is experienced in treating various skin conditions and aesthetic dermatology.",
    acts: [
      "General dermatology",
      "Aesthetic dermatology",
      "Laser therapy",
      "Dermatological surgery",
    ],
    certifications: ["Board Certified Dermatologist"],
    workingTime: [
      "Monday - Friday, 09:00 AM - 17:00 PM",
      "Saturday, 09:00 AM - 12:30 PM",
    ],
    email: "khaoula.djebari@gmail.com",
    phone: "+216 25 987 654",
    address: "Centre Médical Carthage, Tunis",
    image: DrDjebariKhaoula,
  },

  "fourati-nadia": {
    name: "Dr. Fourati Nadia",
    specialty: "Dermatologist",
    city: "Sousse",
    about:
      "Dr. Nadia Fourati provides dermatology consultations and treatments, with a focus on aesthetic dermatology.",
    acts: [
      "General dermatology",
      "Laser treatments",
      "Hair care",
      "Anti-aging treatments",
    ],
    certifications: ["Diploma in Dermatology and Venereology"],
    workingTime: [
      "Monday - Friday, 10:00 AM - 18:00 PM",
      "Saturday, 09:00 AM - 14:00 PM",
    ],
    email: "nadia.fourati@gmail.com",
    phone: "+216 29 333 444",
    address: "Centre Médical Ibn Khaldoun, Sousse",
    image: DrFouratiNadia,
  },

  "garbi-ines": {
    name: "Dr. Garbi Ines",
    specialty: "Dermatologist",
    city: "Sfax",
    about:
      "Dr. Ines Garbi offers dermatology services including treatment of skin, hair, and nail conditions.",
    acts: [
      "Skin disease treatments",
      "Dermatological surgery",
      "Laser dermatology",
      "Pediatric dermatology",
    ],
    certifications: ["Diploma in Dermatology"],
    workingTime: [
      "Monday - Friday, 09:00 AM - 17:00 PM",
      "Saturday, 09:00 AM - 13:00 PM",
    ],
    email: "ines.garbi@gmail.com",
    phone: "+216 50 222 333",
    address: "Polyclinique El Amal, Sfax",
    image: DrGarbiInes,
  },

  "kachouri-sabrine": {
    name: "Dr. Kachouri Sabrine",
    specialty: "Dermatologist",
    city: "Monastir",
    about:
      "Dr. Sabrine Kachouri is specialized in general and aesthetic dermatology, providing advanced care for her patients.",
    acts: [
      "General dermatology",
      "Laser treatments",
      "Skin surgery",
      "Aesthetic care",
    ],
    certifications: ["Board Certified Dermatologist"],
    workingTime: [
      "Monday - Friday, 08:00 AM - 16:00 PM",
      "Saturday, 09:00 AM - 12:00 PM",
    ],
    email: "sabrine.kachouri@gmail.com",
    phone: "+216 55 777 888",
    address: "Clinique El Hana, Monastir",
    image: DrKachouriSabrine,
  },
};

export default function DoctorDetails() {
  const { id } = useParams();
  const doctor = doctors[id];

  if (!doctor) {
    return (
      <p className="text-center mt-10 text-gray-500">Doctor not found.</p>
    );
  }

  return (
    <div className="doctor-page">
      {/* Bandeau header */}
      <div className="doctor-header">
        <div className="doctor-header-content">
          <p className="breadcrumb">
            <Link to="/doctors">Our doctors</Link> &gt;{" "}
            <span>{doctor.name}</span>
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="doctor-container">
        {/* Colonne gauche */}
        <div className="doctor-sidebar">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="doctor-image"
          />
          <h1 className="doctor-name">{doctor.name}</h1>
          <p className="doctor-specialty">{doctor.specialty}</p>
          <p className="doctor-location">{doctor.city}</p>

          <h3 className="section-title">Medical acts</h3>
          <div className="doctor-acts">
            {doctor.acts.map((act, i) => (
              <span key={i} className="act-item">
                {act}
              </span>
            ))}
          </div>
        </div>

        {/* Colonne droite */}
        <div className="doctor-details">
          <h3 className="section-title">About me</h3>
          <p className="doctor-description">{doctor.about}</p>

          <h3 className="section-title">Certifications</h3>
          <ul>
            {doctor.certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>

          <h3 className="section-title">Working Time</h3>
          <ul>
            {doctor.workingTime.map((time, i) => (
              <li key={i}>{time}</li>
            ))}
          </ul>

          <h3 className="section-title">Contacts</h3>
          <p>📧 {doctor.email}</p>
          <p>📞 {doctor.phone}</p>
          <p>📍 {doctor.address}</p>
        </div>
      </div>

         <ConsultationSection/>
      
  {/* {/*Testimonials*/}
      <TestimonialsSection/>
      {/*Partners Section */}
       <PartnersSection /> 
      {/*footer*/}
      <Footer/>
    </div>
  );
}
