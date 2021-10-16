import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from 'redux/contacts-selectors';
import { fetchContact } from 'redux/contacts-operations';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { LoaderMore } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Container, Title } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const filterByContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filterContacts = filterByContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {isLoading && <LoaderMore />}
      {error && <ErrorMessage />}
      <ContactList contacts={filterContacts} />
      <ToastContainer position="top-center" theme="colored" />
    </Container>
  );
}
