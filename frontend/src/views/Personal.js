import { SetTodo } from 'api/FetchTodoAll';
import ItemTask from 'components/molecules/ItemTask/ItemTask';
import React, { useEffect } from 'react';
import { DashboardTemplate } from '../template/DashboardTemplate';

export const Personal = () => {
  useEffect(() => {
    FetchPost();
  }, []);

  async function FetchPost() {
    const res = await SetTodo();
    console.log(res.data);
  }

  return (
    <DashboardTemplate>
      <ItemTask />
    </DashboardTemplate>
  );
};
