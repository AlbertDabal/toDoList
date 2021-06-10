import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.themeColor};
  border-radius: 40px;
  padding: 20px 35px;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
  color: white;
  text-transform: capitalize;
  cursor: pointer;
  user-select: none;
`;

export default Button;
