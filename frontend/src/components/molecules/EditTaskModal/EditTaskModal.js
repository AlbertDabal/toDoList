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

const EditTaskModal = ({ Open, data, setRefresh }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [piority, setPiority] = useState('low');
  const location = useLocation().pathname;

  async function handleSubmit(e) {
    e.preventDefault();

    const name = e.target[0].value;
    const project = e.target[1].value;
    const type = location.substring(1);

    const res = await AddTodo(name, type, project, piority);
    Open(false);
    setRefresh(true);

    return res;
  }

  function handleChangeProject(event) {
    setSelectedProject(event.target.value);
  }

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
          <Input name="name" placeholder="Name task" />

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

EditTaskModal.propTypes = {
  Open: PropTypes.func.isRequired,
  setRefresh: PropTypes.func.isRequired,
  data: PropTypes.element.isRequired,
};

export default EditTaskModal;
