import { toast } from 'react-toastify';
import { Title } from './ErrorMessage.styled';

export const ErrorMessage = ({ error }) => {
  toast.error(`${error}`);
  return <Title>An error has happened. Sorry for the discomfort</Title>;
};
