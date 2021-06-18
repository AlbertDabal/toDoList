import Paragraph from 'components/atoms/Paragraph/Paragraph';
import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import Heading from '../../atoms/Heading/Heading';
import NavbarItem from './NavbarItem';

const Wrapper = styled.div`
  width: 17%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 4px rgba(170, 170, 170, 0.64);

  background-color: white;
`;

const Logo = styled.div`
  margin: 50px;
  justify-content: center;
  display: flex;
  flex-direction: row;

  > h1 {
    font-size: 35px;
    font-weight: 600;
  }
`;

const LogoutStyled = styled.div`
  margin-top: 22vh;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
  color: black;
  cursor: pointer;
  > svg {
    margin-left: 10px;
    font-size: 26px;
  }
`;

const StyledHeading = styled(Heading)`
  color: black;
  margin: 10px 0px;
`;

const LogoText = styled.h1`
  color: ${({ theme }) => theme.themeColor};
`;

const Navbar = () => {
  const history = useHistory();

  const Logout = () => {
    sessionStorage.clear();
    history.push('/');
  };
  return (
    <Wrapper>
      <Logo>
        <h1>Todo</h1>
        <LogoText>App</LogoText>
      </Logo>

      <NavbarItem />

      <LogoutStyled onClick={() => Logout()}>
        <span>Logout</span>
        <BsArrowRight />
      </LogoutStyled>
    </Wrapper>
  );
};

export default Navbar;
