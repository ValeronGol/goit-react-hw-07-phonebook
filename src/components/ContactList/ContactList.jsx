import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import Contact from 'components/Contact/Contact';

const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        </li>
      );
    })}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
ContactList.defaultProps = {
  contacts: [],
};
export default ContactList;
