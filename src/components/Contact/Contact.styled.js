import styled from '@emotion/styled';
export const Conteiner = styled.div`
  display: flex;
  align-items: baseline;
`;
export const Info = styled.p`
  margin-right: 10px;
`;
export const Button = styled.button`
  border-radius: 3px;
  transition-delay: 250ms;
  transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);
  cursor: pointer;
  &:hover {
    background-color: #2d2db6e6;
    color: #f4f3f7ab;
    border-color: #0a0131ab;
  }
`;
