import styled from '@emotion/styled';

export const ConteinerForm = styled.div`
  width: 300px;
  padding: 20px;
  display: block;
  border: 1px solid #477405;
`;

export const Button = styled.button`
  margin: 5px 10px;
  background-color: #0a0131ab;
  color: white;
  border-radius: 7px;
  border-color: #201068ab;
  cursor: pointer;
  transition-delay: 250ms;
  transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);
  &:hover {
    background-color: #5b5bbee6;
    color: #0a0131ab;
    border-color: #0a0131ab;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  height: 40px;
`;
export const Input = styled.input`
  border-radius: 2px;

  &:focus {
    border-color: #4015fffb;
    border-width: medium;
  }
`;
