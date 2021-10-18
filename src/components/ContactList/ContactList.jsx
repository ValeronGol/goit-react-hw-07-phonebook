import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts-operations';
import { getVisibleContacts } from 'redux/contacts-selectors';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
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
