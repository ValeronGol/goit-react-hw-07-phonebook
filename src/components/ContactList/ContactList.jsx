import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts-operations';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';

function ContactList({ contacts }) {
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
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
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
};
ContactList.defaultProps = {
  contacts: [],
};
export default ContactList;
