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
      {isOpen && <AddTaskModal setRefresh={setRefresh} data={data} Open={setIsOpen} />}
      {data
        ? data.map((items) => <ItemTask name={items.name} project={items.project} piority={items.piority} />)
        : null}
    </DashboardTemplate>
  );
};
