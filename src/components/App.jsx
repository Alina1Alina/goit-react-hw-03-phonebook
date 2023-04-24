import { Component } from 'react';
import { Container } from './AppStyled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './FilterContacts';
import { nanoid } from 'nanoid';

export class App extends Component {
    state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  
formSubmitHandler = data => {
  const newContact = { ...data, id: nanoid() };
  this.state.contacts.find(
    ({ name }) => name.toLowerCase() === data.name.toLowerCase()
  )
    ? alert(`${data.name} is already in contacts`)
    : this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
};

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFiltredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };
  render() {
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}  />

        <h2>Contacts</h2>
        <Filter changeFilter={this.changeFilter} filter={filter} />
        <ContactList
          contacts={this.getFiltredContacts()}
          onDeleteContact={this.deleteContacts}
        />
      </Container>
    );
  }
}
