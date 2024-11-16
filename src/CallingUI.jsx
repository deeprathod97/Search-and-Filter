import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import './CallingUI.css';

const CallingUI = ({ contact, onEndCall }) => {
  return (
    <div className="calling-ui">
      <div className="calling-box text-center">
        <div className="caller-image-wrapper">
          <img
            src={contact.image}
            alt={contact.name}
            className="caller-image mb-4"
          />
        </div>
        <h3 className="calling-text">
          <FontAwesomeIcon icon={faPhoneAlt} className="icon" /> Calling...
        </h3>
        <div className="caller-info">
          <p className="contact-name">{contact.name}</p>
          <p className="contact-number">
            <FontAwesomeIcon icon={faPhoneAlt} className="icon" /> {contact.number}
          </p>
        </div>
        <button className="btn btn-danger" onClick={onEndCall}>
          <FontAwesomeIcon icon={faTimes} className="icon" /> End Call
        </button>
      </div>
    </div>
  );
};

export default CallingUI;
