import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts-actions';
import { Conteiner, Title, Input } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();

  const setFilterValue = event => {
    const filterValue = event.currentTarget.value.toUpperCase();
    return dispatch(filterContact(filterValue));
  };

  return (
    <Conteiner>
      <Title>Find contacts by name</Title>
      <Input onChange={setFilterValue} />
    </Conteiner>
  );
}
