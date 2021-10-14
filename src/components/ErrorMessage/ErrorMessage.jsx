import { toast } from 'react-toastify';
import { Title } from './ErrorMessage.styled';

export const ErrorMessage = () => {
  toast.error('It is Error!');
  return <Title>An error has happened. Sorry for the discomfort</Title>;
};
