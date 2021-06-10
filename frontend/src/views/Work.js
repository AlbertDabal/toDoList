import { SetTodo } from 'api/FetchTodoAll';
import Heading from 'components/atoms/Heading/Heading';
import styled from 'styled-components';
import ItemTask from 'components/molecules/ItemTask/ItemTask';
import React, { useEffect, useState } from 'react';
import Button from 'components/atoms/Button/Button';
import AddTaskModal from 'components/molecules/AddTaskModal/AddTaskModal';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { DashboardTemplate } from '../template/DashboardTemplate';

const HeadingMotivation = styled(Heading)``;

const Header = styled.div`
  display: flex;
  padding: 20px 0;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  overflow-y: scroll;
  height: 70vh;
  padding-top: 10px;

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

export const Work = () => {
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    FetchPost();
    setRefresh(false);
  }, [refresh]);

  async function FetchPost() {
    const res = await SetTodo();

    setData(res.data.filter((item) => item.type === 'work'));
  }

  return (
    <DashboardTemplate>
      <Header>
        <HeadingMotivation>Just do it Mark...</HeadingMotivation>
        <Button onClick={() => setIsOpen(true)}>add task</Button>
      </Header>
      <Wrapper>
        {isOpen && <AddTaskModal setRefresh={setRefresh} data={data} Open={setIsOpen} />}
        {data
          ? data.map((items) => (
              // eslint-disable-next-line react/jsx-indent
              <ItemTask
                name={items.name}
                status={items.status}
                project={items.project}
                piority={items.piority}
                // eslint-disable-next-line no-underscore-dangle
                id={items._id}
                setRefresh={setRefresh}
              />
              // eslint-disable-next-line indent
            ))
          : null}
      </Wrapper>
    </DashboardTemplate>
  );
};
