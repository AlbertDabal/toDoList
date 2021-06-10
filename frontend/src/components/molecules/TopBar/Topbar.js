import Heading from 'components/atoms/Heading/Heading';
import NavbarData from 'components/organisms/Navbar/NavbarData';
import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 60px 0px;
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
  color: ${({ theme }) => theme.secondaryColor};

  > svg {
    font-size: 36px;

    margin-right: 10px;
  }
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.secondaryColor};
`;

const Topbar = () => {
  const location = useLocation().pathname;
  const pathName = NavbarData.map((items) => items.items.find((x) => x.path === location));
  const data = pathName.filter((items) => items);

  return (
    <Wrapper>
      <WrapperLeft>
        <SvgContainer>{data[0].icon}</SvgContainer>
        <StyledHeading>{data[0].title}</StyledHeading>
      </WrapperLeft>
      <WrapperRight>
        <Heading>This week task done 0</Heading>
      </WrapperRight>
    </Wrapper>
  );
};

export default Topbar;
