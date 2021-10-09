import PropTypes from 'prop-types';
import { Conteiner, Info, Button } from './Contact.styled';

const Contact = ({ name, number, id, onDelete }) => (
  <Conteiner>
    <Info>{`${name}: ${number}`}</Info>
    <Button data-id={id} onClick={onDelete}>
      Delete
    </Button>
  </Conteiner>
);
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Contact;
