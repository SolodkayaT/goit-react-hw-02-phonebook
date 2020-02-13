import React, { Component } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import { uuid } from "uuidv4";

export default class App extends Component {
  state = {
    contacts: [],
    filter: ""
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  addContact = (name, phone) => {
    const { contacts } = this.state;
    const dubleContact = contacts.find(contact => contact.name === name);
    if (dubleContact) {
      alert(`${name} is already in cntacts!`);
    } else {
      const contact = { id: uuid(), name, phone };
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, contact] };
      });
    }
  };

  getFiltredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = ContactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== ContactId)
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getFiltredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )}
      </>
    );
  }
}
