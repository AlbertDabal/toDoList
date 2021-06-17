import { SetTodo, SetTodoToday } from 'api/FetchTodoAll';
import Heading from 'components/atoms/Heading/Heading';
import ItemTask from 'components/molecules/ItemTask/ItemTask';
import React, { useEffect, useState } from 'react';
import Button from 'components/atoms/Button/Button';
import AddTaskModal from 'components/molecules/AddTaskModal/AddTaskModal';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { createMuiTheme } from '@material-ui/core/styles';
import styled, { ThemeProvider } from 'styled-components';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import PropTypes from 'prop-types';

const HeadingMotivation = styled(Heading)``;

const Header = styled.div`
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 1px 1px 4px rgba(170, 170, 170, 0.64);
`;

const Main = styled.div``;

const Wrapper = styled.div`
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow-y: scroll;
  display: flex;
  height: 74vh;

  margin-top: 20px;

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

const KeyboardDatePickerStyled = styled(KeyboardDatePicker)`
  margin: 0;
  padding: 0;
  > div > input {
    margin-left: 15px;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  > div > div > button > span > svg {
    font-size: 25px;
  }
`;

export const ListTasks = ({ type }) => {
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    FetchPost();
    setRefresh(false);
  }, [refresh]);

  async function FetchPost() {
    const date = selectedDate.toISOString().substr(0, 10);
    const res = await SetTodoToday(date);

    setData(res.data.filter((item) => item.type === type));
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setRefresh(true);
  };

  return (
    <Main>
      <Header>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePickerStyled
            keyboardIconProps={{ fontSize: '100px' }}
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            id="date-picker-inline"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </MuiPickersUtilsProvider>
        <Button onClick={() => setIsOpen(true)}>add task</Button>
      </Header>

      <Wrapper>
        {isOpen && <AddTaskModal typeTask={type} setRefresh={setRefresh} data={data} Open={setIsOpen} />}
        {data
          ? data.map((items) => (
              // eslint-disable-next-line react/jsx-indent
              <ItemTask
                name={items.name}
                status={items.status}
                project={items.project}
                piority={items.piority}
                description={items.description}
                date={items.date}
                // eslint-disable-next-line no-underscore-dangle
                id={items._id}
                setRefresh={setRefresh}
              />
              // eslint-disable-next-line indent
            ))
          : null}
      </Wrapper>
    </Main>
  );
};

ListTasks.propTypes = {
  type: PropTypes.string.isRequired,
};
