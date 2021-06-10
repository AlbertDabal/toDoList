import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  width: 100%;
  border: none;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
  padding: 6px 15px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;
