import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from 'redux/contacts-selectors';
import { filterContact } from 'redux/contacts-actions';
import { fetchContact, addContact } from 'redux/contacts-actionOperation';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { LoaderMore } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Container } from './App.styled';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const formSubmit = ({ name, number }) => {
    const duplicateContact = contacts.find(contact => {
      return contact.name === name;
    });
    if (duplicateContact) {
      toast.warn(`${name} is in the phonebook!!!`);
      return [...contacts];
    } else {
      return dispatch(
        addContact({
          name: name,
          number: number,
        }),
      );
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
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h1>Contacts</h1>
      <Filter setFilterToState={setFilterToState} />
      {isLoading && <LoaderMore />}
      {error && <ErrorMessage />}
      <ContactList contacts={filterContacts} />
      <ToastContainer position="top-center" theme="colored" />
    </Container>
  );
}
