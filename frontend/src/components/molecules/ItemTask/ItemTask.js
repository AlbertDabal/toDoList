import Alert from 'components/atoms/Alert/Alert';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdCheckBoxOutlineBlank, MdMoreVert, MdCheckBox, MdCreate, MdClear, MdUndo } from 'react-icons/md';
import NavbarData from 'components/organisms/Navbar/NavbarData';
import { useLocation } from 'react-router-dom';
import { DoneTodo } from 'api/FetchTodoAll';
import DeleteTaskModal from '../DeleteTaskModal/DeleteTaskModal';
import EditTaskModal from '../EditTaskModal/EditTaskModal';

const Wrapper = styled.div`
  display: flex;
  box-shadow: 1px 1px 4px rgba(170, 170, 170, 0.64);
  flex-direction: column;
  background-color: white;
  width: 32%;
  justify-content: space-between;
  flex-direction: column;
  height: 47%;
  padding: 30px;
  margin-left: 15px;

  margin-bottom: 10px;
`;

const ParagraphType = styled(Paragraph)`
  color: ${({ theme }) => theme.textColor};
  font-weight: 700;
  text-transform: capitalize;
`;

const SvgContainer = styled.div`
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;

  > svg {
    font-size: 35px;
  }
`;

const SvgContainerEdit = styled.div`
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;

  > svg {
    font-size: 30px;
    margin: 0 10px;
  }
`;

const WrapperMid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const WrapperTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const WrapperRight = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

const StyledParagraph = styled(Paragraph)`
  text-decoration: ${({ status }) => (status ? 'none' : 'line-through')};
  text-decoration-thickness: 3px;
  color: #9d9d9d;
`;

const StyledHeader = styled(Paragraph)`
  margin-bottom: 30px;
  font-weight: 700;
  text-transform: capitalize;
  text-decoration: ${({ status }) => (status ? 'none' : 'line-through')};
  text-decoration-thickness: 3px;
  color: ${({ theme, status }) => (status ? 'black' : theme.textColor)};
`;

const ItemTask = ({ name, type, project, piority, status, id, setRefresh, description, date }) => {
  const typeIcon = NavbarData.find((x) => x.type === type);
  const location = useLocation().pathname;
  const [isOption, setIsOption] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  async function Done() {
    const res = await DoneTodo(id, false);
    console.log(res);
    setRefresh(true);
  }

  async function UnDone() {
    const res = await DoneTodo(id, true);
    console.log(res);
    setRefresh(true);
  }

  return (
    <Wrapper>
      {isDelete && <DeleteTaskModal id={id} setRefresh={setRefresh} setIsDelete={setIsDelete} />}
      {isEdit && (
        <EditTaskModal
          id={id}
          name={name}
          description={description}
          piorityValue={piority}
          setIsEdit={setIsEdit}
          setIsOption={setIsOption}
          setRefresh={setRefresh}
          dateValue={date}
        />
      )}

      <WrapperTop>
        {location === '/allTasks' && <SvgContainer>{typeIcon.icon}</SvgContainer>}
        {location !== '/allTasks' && (
          <SvgContainer>
            {status ? <MdCheckBoxOutlineBlank onClick={() => Done()} /> : <MdCheckBox onClick={() => UnDone()} />}
          </SvgContainer>
        )}

        {!isOption ? (
          <MdMoreVert onClick={() => setIsOption(!isOption)} style={{ fontSize: '28px', cursor: 'pointer' }} />
        ) : (
          <SvgContainerEdit>
            <MdClear onClick={() => setIsDelete(true)} />

            <MdCreate onClick={() => setIsEdit(true)} />
            <MdUndo onClick={() => setIsOption(!isOption)} />
          </SvgContainerEdit>
        )}
      </WrapperTop>
      <WrapperMid>
        {location !== '/allTasks' ? (
          <StyledHeader status={status}>{` ${name} `}</StyledHeader>
        ) : (
          <StyledHeader status>{` ${name} `}</StyledHeader>
        )}
        <StyledParagraph status>{description}</StyledParagraph>
      </WrapperMid>
      <WrapperRight>
        <ParagraphType>{project}</ParagraphType>
        <Alert type={piority}>{piority}</Alert>
      </WrapperRight>
    </Wrapper>
  );
};

export default ItemTask;

ItemTask.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  project: PropTypes.string,
  status: PropTypes.string.isRequired,
  piority: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setRefresh: PropTypes.func.isRequired,
  description: PropTypes.string,
  date: PropTypes.string.isRequired,
};

ItemTask.defaultProps = {
  project: '',
  description: '',
};
