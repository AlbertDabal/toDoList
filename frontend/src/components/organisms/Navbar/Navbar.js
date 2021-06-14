import Paragraph from 'components/atoms/Paragraph/Paragraph';
import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';
import Heading from '../../atoms/Heading/Heading';
import NavbarItem from './NavbarItem';

const Wrapper = styled.div`
  width: 17%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 0.5px solid #9a9a9a;

  background-color: white;
`;

const Logo = styled.div`
  margin: 50px;
  justify-content: center;
  display: flex;
  flex-direction: row;

  > h1 {
    font-size: 26px;
    font-weight: 600;
    color: black;
  }
`;

const Logout = styled.div`
  margin-top: 22vh;
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

const Navbar = () => (
  <Wrapper>
    <Logo>
      <h1>Todo</h1>
      <h1>App</h1>
    </Logo>

    <NavbarItem />

    <Logout>
      <span>Logout</span>
      <BsArrowRight />
    </Logout>
  </Wrapper>
);

export default Navbar;
