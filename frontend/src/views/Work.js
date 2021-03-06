import React from 'react';
import { ListTasks } from 'components/organisms/ListTasks/ListTasks';
import { DashboardTemplate } from '../template/DashboardTemplate';

export const Work = () => (
  <DashboardTemplate>
    <ListTasks type="work" />
  </DashboardTemplate>
);
