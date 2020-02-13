import React from "react";
import PropTypes from "prop-types";

export default function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name} {contact.phone}
          </p>
          <button type="button" onClick={() => onRemoveContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.defaultProps = {
  contacts: []
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  onRemoveContact: PropTypes.func
};
