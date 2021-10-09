import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { addContact, deleteContact, filterContact } from 'redux/actions';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Conteiner } from './App.styled';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const formSubmit = ({ name, number }) => {
    const duplicateContact = contacts.find(contact => {
      return contact.name === name;
    });
    if (duplicateContact) {
      alert(`${name} вже є у телефонній книзі!!!`);
      return [...contacts];
    } else {
      return dispatch(addContact(name, number));
    }
  };

  const setFilterToState = filterData => {
    return dispatch(filterContact(`${filterData}`));
  };

  const filterbyContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filterContacts = filterbyContacts();

  return (
    <Conteiner>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h1>Contacts</h1>
      <Filter setFilterToState={setFilterToState} />
      <ContactList
        contacts={filterContacts}
        onDelete={id => dispatch(deleteContact(id))}
      />
    </Conteiner>
  );
}
