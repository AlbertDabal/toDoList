import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { Input } from 'components/atoms/Input/Input';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Alert from 'components/atoms/Alert/Alert';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { AddTodoWork, AddTodo } from 'api/FetchTodoAll';
import { useLocation } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Select from 'components/atoms/Select/Select';
import styled from 'styled-components';
import { TextArea } from 'components/atoms/TextArea/TextArea';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(98, 98, 98, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
  z-index: 999;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

const Modal = styled.div`
  display: flex;
  background-color: white;
  width: 40%;
  height: 60%;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`;

const StyledParagraph = styled(Paragraph)`
  text-decoration: underline;
  margin-top: 20px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const WrapperAlert = styled.div`
  display: flex;
  align-items: center;

  > p {
    margin-right: 30px;
    margin-left: 16px;
    font-weight: 500;
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

const ParagraphError = styled(Paragraph)`
  color: red;
  font-weight: 500;
  margin-left: 15px;
  font-size: 12px;
`;

const StyledAlert = styled(Alert)`
  cursor: pointer;
  margin-right: 5px;
  background-color: ${({ clicked }) => (clicked ? '#008cc8' : '#008cc899')};
`;

const AddTaskModal = ({ Open, data, setRefresh, typeTask }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [piority, setPiority] = useState('low');
  const location = useLocation().pathname;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [error, setError] = useState(false);

  // eslint-disable-next-line consistent-return
  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value;
    let description;

    if (typeTask === 'work') {
      description = e.target[4].value;
    } else {
      description = e.target[3].value;
    }

    console.log(description);

    if (typeTask === 'work') {
      if (name === null || selectedProject === null || selectedDate === null) {
        setError(true);
      } else {
        const type = location.substring(1);

        const res = await AddTodoWork(name, description, type, selectedProject, piority, selectedDate);
        Open(false);
        setRefresh(true);

        return res;
      }
    } else if (name === null || selectedDate === null) {
      setError(true);
    } else {
      const type = location.substring(1);

      const res = await AddTodo(name, description, type, piority, selectedDate);
      Open(false);
      setRefresh(true);

      return res;
    }
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const optionsPiority = ['low', 'medium', 'high'];

  const uniq = data.filter((v, i, a) => a.findIndex((t) => t.project === v.project) === i);

  return (
    <Wrapper>
      <Modal>
        <Form onSubmit={handleSubmit}>
          <Heading>Add task...</Heading>
          <WrapperAlert>
            <Paragraph>Select piority</Paragraph>
            {optionsPiority.map((item) => (
              <StyledAlert clicked={piority === item} onClick={() => setPiority(item)}>
                {item}
              </StyledAlert>
            ))}
          </WrapperAlert>
          <Input name="name" autoComplete="off" placeholder="Name task" />

          {typeTask === 'work' && <Select data={uniq} setSelectedProject={setSelectedProject} />}

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

          <TextArea rows="15" cols="30" name="description" autoComplete="off" placeholder="Description" />

          <ParagraphError>{error ? 'Wype??nij wszystkie pola w formularzu' : ' '}</ParagraphError>

          <WrapperButton>
            <Button type="submit">add task</Button>
            <StyledParagraph onClick={() => Open(false)}>Return</StyledParagraph>
          </WrapperButton>
        </Form>
      </Modal>
    </Wrapper>
  );
};

AddTaskModal.propTypes = {
  Open: PropTypes.func.isRequired,
  setRefresh: PropTypes.func.isRequired,
  data: PropTypes.element.isRequired,
  typeTask: PropTypes.string.isRequired,
};

export default AddTaskModal;
