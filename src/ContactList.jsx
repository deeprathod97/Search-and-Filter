import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

const ContactList = ({ contacts, searchTerm, onCall }) => {
  // Filter contacts based on the search term
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="row">
      {filteredContacts.map((contact, index) => (
        <div key={index} className="col-md-4 col-sm-6 mb-4">
          <div className="contact-card">
            <div className="contact-info d-flex align-items-center">
              <img
                src={contact.image}
                alt={contact.name}
                className="contact-image"
              />
              <div className="ml-3">
                <h5 className="contact-name">{contact.name}</h5>
                <p className="contact-number">{contact.number}</p>
              </div>
            </div>
            <div className="contact-actions mt-3">
              <button
                className="btn btn-success mr-2"
                onClick={() => onCall(contact)}
              >
                <FontAwesomeIcon icon={faPhoneAlt} />
              </button>
              <button className="btn btn-primary">
                <FontAwesomeIcon icon={faCommentAlt} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
