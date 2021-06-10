import styled, { css } from 'styled-components';
// prettier-ignore
const Alert = styled.h6`
  text-align:center;
  color: white;
  border-radius: 30px;
  padding: 15px 30px;
  font-weight:700;
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
