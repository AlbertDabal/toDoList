import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import NavbarData from './NavbarData';
import NavbarItem from './NavbarItem';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.themeColor};
  width: 19%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.secondaryColor};
`;

const Navbar = () => (
  <Wrapper>
    {NavbarData.map((item) => (
      <div>
        <StyledHeading>{item.title}</StyledHeading>
        <NavbarItem item={item.items} />
      </div>
    ))}
  </Wrapper>
);

export default Navbar;
