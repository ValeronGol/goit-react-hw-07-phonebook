import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { getIsLoading, getError } from 'redux/contacts-selectors';
import { fetchContact } from 'redux/contacts-operations';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { LoaderMore } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Container, Title } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {isLoading && <LoaderMore />}
      {error && <ErrorMessage />}
      <ContactList />
      <ToastContainer position="top-center" theme="colored" />
    </Container>
  );
}
