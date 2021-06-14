/* eslint-disable indent */
import { SetTodo } from 'api/FetchTodoAll';
import ItemTask from 'components/molecules/ItemTask/ItemTask';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DashboardTemplate } from '../template/DashboardTemplate';

const Wrapper = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  height: 80vh;
  overflow-y: scroll;

  padding-top: 30px;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #ccc;
  }
`;

export const AllTasks = () => {
  const [data, setData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    FetchPost();
    setRefresh(false);
  }, [refresh]);

  async function FetchPost() {
    const res = await SetTodo();
    setData(res.data);
    console.log(data);
  }

  return (
    <DashboardTemplate>
      <Wrapper>
        {console.log(data)}
        {data
          ? data.map((items) => (
              // eslint-disable-next-line react/jsx-indent
              <ItemTask
                name={items.name}
                type={items.type}
                project={items.project}
                piority={items.piority}
                description={items.description}
                setRefresh={setRefresh}
              />
            ))
          : null}
      </Wrapper>
    </DashboardTemplate>
  );
};
