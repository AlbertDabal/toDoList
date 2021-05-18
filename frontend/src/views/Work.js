import { SetTodo } from 'api/FetchTodoAll';
import ItemTask from 'components/molecules/ItemTask/ItemTask';
import React, { useEffect, useState } from 'react';
import { DashboardTemplate } from '../template/DashboardTemplate';

export const Work = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    FetchPost();
  }, []);

  async function FetchPost() {
    const res = await SetTodo();

    setData(res.data.filter((item) => item.type === 'work'));
  }

  return (
    <DashboardTemplate>
      {data
        ? data.map((items) => (
            // eslint-disable-next-line react/jsx-indent
            <ItemTask name={items.name} project={items.project} piority={items.piority} />
            // eslint-disable-next-line indent
          ))
        : null}
    </DashboardTemplate>
  );
};
