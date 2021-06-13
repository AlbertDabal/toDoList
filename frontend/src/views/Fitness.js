import React from 'react';
import { ListTasks } from 'components/organisms/ListTasks/ListTasks';
import { DashboardTemplate } from '../template/DashboardTemplate';

export const Fitness = () => (
  <DashboardTemplate>
    <ListTasks type="fitness" />
  </DashboardTemplate>
);
