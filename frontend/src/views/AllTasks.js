/* eslint-disable indent */
import { SetTodo } from 'api/FetchTodoAll';
import ItemTask from 'components/molecules/ItemTask/ItemTask';
import React, { useEffect, useState } from 'react';
import { DashboardTemplate } from '../template/DashboardTemplate';

export const AllTasks = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    FetchPost();
  }, []);

  async function FetchPost() {
    const res = await SetTodo();
    setData(res.data);
    console.log(data);
  }

  return (
    <DashboardTemplate>
      {data
        ? data.map((items) => (
            // eslint-disable-next-line react/jsx-indent
            <ItemTask name={items.name} type={items.type} project={items.project} piority={items.piority} />
          ))
        : null}
    </DashboardTemplate>
  );
};
