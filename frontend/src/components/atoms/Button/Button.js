import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.themeColor};
  border-radius: 30px;
  padding: 10px 55px;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  color: white;
`;

export default Button;
