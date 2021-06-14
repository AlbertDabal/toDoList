import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.themeColor};
  padding: 20px 60px;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
  color: white;
  text-transform: capitalize;
  cursor: pointer;
  user-select: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default Button;
