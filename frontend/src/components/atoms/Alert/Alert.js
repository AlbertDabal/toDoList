import styled, { css } from 'styled-components';
// prettier-ignore
const Alert = styled.h6`
  text-align:center;
  color: white;
  border-radius: 30px;
  padding: 10px 30px;
  filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.25));
  font-weight:700;
  user-select: none;
  background-color: ${({ theme }) => theme.alertColorLow};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform:uppercase;

  ${({ type }) => type === 'medium'
    && css`
     background-color: ${({ theme }) => theme.alertColorMedium};
    `}

    ${({ type }) => type === 'high'
    && css`
     background-color: ${({ theme }) => theme.alertColorHigh};
    `}

    
`;

export default Alert;
