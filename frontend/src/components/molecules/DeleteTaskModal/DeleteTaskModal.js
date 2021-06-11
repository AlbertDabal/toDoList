import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DelateTodo } from 'api/FetchTodoAll';

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

const Modal = styled.div`
  display: flex;
  background-color: white;
  border-radius: 30px;
  width: 30%;
  height: 25%;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`;

const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledParagraph = styled(Paragraph)`
  text-decoration: underline;
  margin-top: 20px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const DeleteTaskModal = ({ setIsDelete, id, setRefresh }) => {
  async function Delete() {
    const res = await DelateTodo(id);
    setIsDelete(false);
    setRefresh(true);
  }
  return (
    <Wrapper>
      <Modal>
        <Heading>Are you sure you want to delete the task?</Heading>

        <WrapperButton>
          <Button onClick={() => Delete()}>Delete task</Button>
          <StyledParagraph onClick={() => setIsDelete(false)}>Return</StyledParagraph>
        </WrapperButton>
      </Modal>
    </Wrapper>
  );
};

export default DeleteTaskModal;

DeleteTaskModal.propTypes = {
  setIsDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  setRefresh: PropTypes.func.isRequired,
};
