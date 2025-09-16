import React from "react";
import "./Footer.css";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

// logos you mentioned
import Logo from "../../assets/logos/Full color Logo HR.png";
import LogoWhite from "../../assets/logos/LogoWhite.svg";
import Send from "../../assets/icons/send.svg";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="footer-columns">
          {/* LEFT column */}
          <div className="footer-left">
            <div className="logo-row">
              <img src={Logo} alt="Full logo" className="full-logo" />
              {/* If you want the word Renyou next to it, uncomment below */}
              {/* <span className="brand-text">Renyou</span> */}
            </div>

            <div className="contact-info">
              <div className="info-line">Adresse: Nabeul, Tunisia</div>
              <div className="info-line">+216 55 373 686</div>
              <div className="info-line">contact.renyouapp.com</div>
            </div>

           
          </div>

          {/* RIGHT column */}
          <div className="footer-right">
            <h3 className="contact-title">Contact Us</h3>
            <div className="email-row">
              <input className="email-input" type="email" placeholder="Mail" />
              <button className="send-btn" aria-label="send">
                <img src={Send} alt="small white logo" className="svg" />
              </button>
            </div>
            <textarea className="message-area" placeholder="Type your question here" />
          </div>
        </div>

        {/* bottom */}
     <div className="footer-bottom">
       <div className="divider" />
         <div className="bottom-row">
            <div className="bottom-left">
              <a className="social-btn" href="#"><FaLinkedinIn /></a>
              <a className="social-btn" href="#"><FaFacebookF /></a>
              <a className="social-btn" href="#"><FaInstagram /></a>
          </div>
          <div className="bottom-center">
            <img src={LogoWhite} alt="small white logo" className="small-logo" />
          </div>    
        <div className="copyright">© 2025 Skinphilosophy. All rights reserved </div>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
