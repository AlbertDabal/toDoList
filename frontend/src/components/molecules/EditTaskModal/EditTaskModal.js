import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { Input } from 'components/atoms/Input/Input';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import Alert from 'components/atoms/Alert/Alert';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { AddTodo, EditTodo } from 'api/FetchTodoAll';
import { useLocation } from 'react-router-dom';
import { TextArea } from 'components/atoms/TextArea/TextArea';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

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
  height: 50%;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`;

const Select = styled.select`
  font-size: ${({ theme }) => theme.fontSize.s};
  border: none;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
  padding: 5px 10px;
  outline: none;
  width: 100%;
  margin-bottom: 20px;
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

const StyledAlert = styled(Alert)`
  cursor: pointer;
  margin-right: 5px;
  background-color: ${({ clicked }) => (clicked ? '#008cc8' : '#008cc899')};
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

const EditTaskModal = ({
  name,
  Open,
  data,
  setRefresh,
  piorityValue,
  setIsEdit,
  setIsOption,
  id,
  description,
  dateValue,
}) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [piority, setPiority] = useState(piorityValue);
  const location = useLocation().pathname;
  const [valueName, setValueName] = useState(name);
  const [valueDescription, setValueDescription] = useState(description);
  const [selectedDate, setSelectedDate] = useState(dateValue);

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await EditTodo(id, valueName, valueDescription, piority);

    setIsEdit(false);
    setIsOption(false);
    setRefresh(true);

    return res;
  }

  function handleChangeProject(event) {
    setSelectedProject(event.target.value);
  }

  function onTodoChange(value) {
    setValueName(value);
  }

  function descriptionChange(value) {
    setValueDescription(value);
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const optionsPiority = ['low', 'medium', 'high'];

  return (
    <Wrapper>
      <Modal>
        <Form onSubmit={handleSubmit}>
          <Heading>Edit task...</Heading>
          <WrapperAlert>
            <Paragraph>Select piority</Paragraph>
            {optionsPiority.map((item) => (
              <StyledAlert clicked={piority === item} onClick={() => setPiority(item)}>
                {item}
              </StyledAlert>
            ))}
          </WrapperAlert>
          <Input name="name" onChange={(e) => onTodoChange(e.target.value)} placeholder="Name task" value={valueName} />
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
          <TextArea
            onChange={(e) => descriptionChange(e.target.value)}
            rows="15"
            cols="30"
            name="description"
            autoComplete="off"
            placeholder="Description"
            value={valueDescription}
          />

          <WrapperButton>
            <Button type="submit">edit task</Button>
            <StyledParagraph onClick={() => setIsEdit(false)}>Return</StyledParagraph>
          </WrapperButton>
        </Form>
      </Modal>
    </Wrapper>
  );
};

EditTaskModal.propTypes = {
  Open: PropTypes.func.isRequired,
  setIsOption: PropTypes.func.isRequired,
  setRefresh: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired,
  data: PropTypes.element.isRequired,
  name: PropTypes.element.isRequired,
  piorityValue: PropTypes.element.isRequired,
  id: PropTypes.element.isRequired,
  description: PropTypes.element,
  dateValue: PropTypes.element.isRequired,
};

EditTaskModal.defaultProps = {
  description: '',
};

export default EditTaskModal;
