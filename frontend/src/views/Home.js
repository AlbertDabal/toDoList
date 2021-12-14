/* eslint-disable jsx-a11y/anchor-is-valid */
import Heading from 'components/atoms/Heading/Heading';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  align-items: center;
  height: 100vh;
`;

const Header = styled.div`
  padding: 5px 40px;
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 1px 1px 4px rgba(170, 170, 170, 0.64);
  width: 100%;
`;

const Logo = styled.div`
  margin: 30px;
  justify-content: center;
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 30pt;
    font-weight: 600;
  }
`;
const LogoText = styled.h1`
  color: ${({ theme }) => theme.themeColor};
`;

const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.themeColor};
  padding: 20px 30px;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
  color: white;
  text-transform: capitalize;
  cursor: pointer;
  user-select: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 80vh;
  width: 60%;
`;

const StyledHeading = styled(Heading)`
  font-size: 40px;
  margin-bottom: 50px;
`;

const StyledButton = styled(Button)`
  text-transform: none;
  margin-top: 40px;
  margin-bottom: 100px;
  > a {
    color: white;
    text-decoration: none;
  }
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Home = () => (
  <Wrapper>
    <Header>
      <Logo>
        <h1>Todo</h1>
        <LogoText>App</LogoText>
      </Logo>

      <StyledLink to={routes.login}>Sing in</StyledLink>
    </Header>
    <Main>
      <StyledHeading>Project Todo APP</StyledHeading>
      <Paragraph style={{ fontSize: '24px', color: '#999' }}>
        This site is basic task organizer. You can write and group each tasks on individual category and dates. It will
        help you manage all your works on everyday.
      </Paragraph>
      <StyledButton>
        <a href="https://github.com/AlbertDabal/toDoList" target="__blank">
          Repo this Project
        </a>
      </StyledButton>
    </Main>
    <Footer>
      <Paragraph>
        Web App Created by&nbsp;
        <a href="#" style={{ color: 'black' }}>
          Albert Dąbal
        </a>
      </Paragraph>
    </Footer>
  </Wrapper>
);
