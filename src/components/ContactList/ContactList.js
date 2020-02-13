import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li className={styles.contactItem} key={contact.id}>
          <p>
            {contact.name} : {contact.phone}
          </p>
          <button
            className={styles.contactButton}
            type="button"
            onClick={() => onRemoveContact(contact.id)}
          >
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
