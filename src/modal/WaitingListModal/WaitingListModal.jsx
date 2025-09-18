import React from "react";
import "./WaitingListModal.css";
import CloseIcon from "../../assets/icons/close.png";


export default function WaitingListModal({ isOpen, onClose }) {
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Join Renyou’s <br />Waiting List</h2>
        <p>Be among the first to experience a new way to care for your skin and connect with experts.</p>
        <input type="email" placeholder="Mail" />
        <button className="modal-content-button" >Join the list</button>
        <button className="close-btn" onClick={onClose}>
              <img src={CloseIcon} alt="Close" />
        </button>
      </div>
    </div>
  );
}
