import Heading from 'components/atoms/Heading/Heading';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import Button from 'components/atoms/Button/Button';

const Logo = styled.div`
  margin: 50px;
  justify-content: center;
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 30pt;
    font-weight: 600;
  }
`;

export const Home = () => (
  <Logo>
    <h1>Todo</h1>
    <h1>App</h1>
    <Button>
      <Link to={routes.login}>Login</Link>
    </Button>
  </Logo>
);
