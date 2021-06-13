import { SetTodo } from 'api/FetchTodoAll';
import ItemTask from 'components/molecules/ItemTask/ItemTask';
import React, { useEffect, useState } from 'react';
import { ListTasks } from 'components/organisms/ListTasks/ListTasks';
import { DashboardTemplate } from '../template/DashboardTemplate';

export const Personal = () => (
  <DashboardTemplate>
    <ListTasks type="personal" />
  </DashboardTemplate>
);
