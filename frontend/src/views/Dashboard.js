import React from 'react';
import { ListTasks } from 'components/organisms/ListTasks/ListTasks';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import { DashboardTemplate } from '../template/DashboardTemplate';

const Wrapper = styled.div`
  height: 85vh;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dashboard = () => (
  <DashboardTemplate>
    <Wrapper>
      <Heading>Todo APP</Heading>
    </Wrapper>
  </DashboardTemplate>
);
