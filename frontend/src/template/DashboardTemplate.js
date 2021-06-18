import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navbar from 'components/organisms/Navbar/Navbar';
import Topbar from 'components/molecules/TopBar/Topbar';

const Wrapper = styled.div`
  display: flex;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
`;

const Content = styled.div`
  width: 90%;
`;

const Main = styled.div``;

export const DashboardTemplate = ({ children }) => (
  <Wrapper>
    <Navbar />
    <MainWrapper>
      <Content>
        <Topbar />
        <Main>{children}</Main>
      </Content>
    </MainWrapper>
  </Wrapper>
);

DashboardTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
