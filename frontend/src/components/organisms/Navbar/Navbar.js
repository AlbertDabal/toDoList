import Paragraph from 'components/atoms/Paragraph/Paragraph';
import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';
import Heading from '../../atoms/Heading/Heading';
import NavbarData from './NavbarData';
import NavbarItem from './NavbarItem';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.themeColor};
  width: 15%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-right: 30px;
`;

const Logo = styled.div`
  margin: 50px;
  justify-content: center;
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 30pt;
    font-weight: 600;
    color: white;
  }
`;

const Logout = styled.div`
  margin-top: 22vh;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
  color: white;
  cursor: pointer;
  > svg {
    margin-left: 10px;
    font-size: 26px;
  }
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.secondaryColor};
  margin: 10px 0px;
`;

const Navbar = () => (
  <Wrapper>
    <Logo>
      <h1>Todo</h1>
      <h1>App</h1>
    </Logo>

    {NavbarData.map((item) => (
      <div>
        <StyledHeading>{item.title}</StyledHeading>
        <NavbarItem item={item.items} />
      </div>
    ))}
    <Logout>
      <span>Logout</span>
      <BsArrowRight />
    </Logout>
  </Wrapper>
);

export default Navbar;
