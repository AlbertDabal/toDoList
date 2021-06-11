import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { Input } from 'components/atoms/Input/Input';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import Alert from 'components/atoms/Alert/Alert';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { AddTodo } from 'api/FetchTodoAll';
import { useLocation } from 'react-router-dom';
import Select from 'components/atoms/Select/Select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  border-radius: 30px;
  width: 30%;
  height: 50%;
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

const StyledAlert = styled(Alert)`
  cursor: pointer;
  margin-right: 5px;
  background-color: ${({ clicked }) => (clicked ? '#008cc8' : '#008cc899')};
`;

const AddTaskModal = ({ Open, data, setRefresh }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [piority, setPiority] = useState('low');
  const location = useLocation().pathname;
  const [startDate, setStartDate] = useState(new Date());

  async function handleSubmit(e) {
    e.preventDefault();

    const name = e.target[0].value;

    const type = location.substring(1);

    const res = await AddTodo(name, type, selectedProject, piority);
    Open(false);
    setRefresh(true);

    return res;
  }

  function handleChangeProject(event) {
    setSelectedProject(event.target.value);
  }

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

          <Select data={uniq} setSelectedProject={setSelectedProject} />
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

          {/* <Select value={selectedProject} onChange={handleChangeProject}>
            <option value="" disabled selected>
              Choose project
            </option>
            {uniq.map((item) => (
              <option value={item.project}>{item.project}</option>
            ))}

            <input type="text" name="text" />
          </Select> */}

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
};

export default AddTaskModal;
