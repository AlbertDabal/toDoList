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
  box-shadow: 1px 1px 4px rgba(171, 171, 171, 0.77);
  border-radius: 40px;
  height: 75px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
  margin-bottom: 20px;
`;

const ParagraphType = styled(Paragraph)`
  color: ${({ theme }) => theme.textColor};
  font-weight: 700;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
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
    margin: 10px;
  }
`;

const WrapperLeft = styled.div`
  display: flex;
  align-items: center;
`;
const WrapperRight = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: space-between;
`;

const StyledParagraph = styled(Paragraph)`
  margin-left: 40px;
  text-decoration: ${({ status }) => (status ? 'none' : 'line-through')};
  text-decoration-thickness: 3px;
  color: ${({ theme, status }) => (status ? 'black' : theme.textColor)};
`;

const ItemTask = ({ name, type, project, piority, status, id, setRefresh }) => {
  const typeIcon = NavbarData[0].items.find((x) => x.type === type);
  const location = useLocation().pathname;
  const [isOption, setIsOption] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  async function Done() {
    const res = await DoneTodo(id);
    setRefresh(true);
  }

  return (
    <Wrapper>
      {isDelete && <DeleteTaskModal id={id} setRefresh={setRefresh} setIsDelete={setIsDelete} />}
      {isEdit && (
        <EditTaskModal
          id={id}
          name={name}
          piorityValue={piority}
          setIsEdit={setIsEdit}
          setIsOption={setIsOption}
          setRefresh={setRefresh}
        />
      )}

      <WrapperLeft>
        {location === '/allTasks' && <SvgContainer>{typeIcon.icon}</SvgContainer>}
        {location !== '/allTasks' && (
          <SvgContainer>{status ? <MdCheckBoxOutlineBlank onClick={() => Done()} /> : <MdCheckBox />}</SvgContainer>
        )}

        {location !== '/allTasks' ? (
          <StyledParagraph status={status}>{` ${name} `}</StyledParagraph>
        ) : (
          <StyledParagraph status>{` ${name} `}</StyledParagraph>
        )}
      </WrapperLeft>
      <WrapperRight>
        <ParagraphType>{project}</ParagraphType>
        <Alert type={piority}>{piority}</Alert>
        {!isOption ? (
          <MdMoreVert onClick={() => setIsOption(!isOption)} style={{ fontSize: '28px', cursor: 'pointer' }} />
        ) : (
          <SvgContainerEdit>
            <MdClear onClick={() => setIsDelete(true)} />

            <MdCreate onClick={() => setIsEdit(true)} />
            <MdUndo onClick={() => setIsOption(!isOption)} />
          </SvgContainerEdit>
        )}
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
};

ItemTask.defaultProps = {
  project: '',
};
