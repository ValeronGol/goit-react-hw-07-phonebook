import { Conteiner, Title, Input } from './Filter.styled';

export default function Filter(props) {
  const setFilterValue = event => {
    props.setFilterToState(event.currentTarget.value.toUpperCase());
  };

  return (
    <Conteiner>
      <Title>Find contacts by name</Title>
      <Input onChange={setFilterValue} />
    </Conteiner>
  );
}
