import Heading from 'components/atoms/Heading/Heading';
import NavbarData from 'components/organisms/Navbar/NavbarData';
import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 40px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const WrapperLeft = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperRight = styled.div`
  display: flex;
`;

const SvgContainer = styled.div`
  color: black;

  > svg {
    font-size: 36px;

    margin-right: 10px;
  }
`;

const Topbar = () => {
  const location = useLocation().pathname;
  const pathName = NavbarData.find((x) => x.path === location);
  console.log(pathName);
  // const data = pathName.filter((items) => items);

  return (
    <Wrapper>
      <WrapperLeft>
        <SvgContainer>{pathName.icon}</SvgContainer>
        <Heading>{pathName.title}</Heading>
      </WrapperLeft>
      <WrapperRight>
        <Heading>Marek</Heading>
      </WrapperRight>
    </Wrapper>
  );
};

export default Topbar;
