import { SetTodo } from 'api/FetchTodoAll';
import ItemTask from 'components/molecules/ItemTask/ItemTask';
import React, { useEffect, useState } from 'react';
import { DashboardTemplate } from '../template/DashboardTemplate';

export const Personal = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    FetchPost();
  }, []);

  async function FetchPost() {
    const res = await SetTodo();
    try {
      setData(res.data.filter((item) => item.type === 'personal'));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DashboardTemplate>
      {data ? data.map((items) => <ItemTask name={items.name} status={items.status} piority={items.piority} />) : null}
    </DashboardTemplate>
  );
};
