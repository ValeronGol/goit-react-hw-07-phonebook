import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts-operations';
import { getContacts, getFilter } from 'redux/contacts-selectors';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filterByContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filterContacts = filterByContacts();

  return (
    <List>
      {filterContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              onDelete={() => dispatch(deleteContact(id))}
            />
          </li>
        );
      })}
    </List>
  );
};
