import Alert from 'components/atoms/Alert/Alert';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import React from 'react';
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  box-shadow: 1px 1px 4px rgba(171, 171, 171, 0.77);
  border-radius: 30px;
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

const ItemTask = ({ name, type, project, piority }) => (
  <Wrapper>
    {type ? <ParagraphType>{type}</ParagraphType> : null}
    <Paragraph style={{ width: '60%' }}>{name}</Paragraph>
    <ParagraphType style={{ width: '10%' }}>{project}</ParagraphType>
    <Alert type={piority}>{piority}</Alert>
    <RiArrowDownSLine style={{ fontSize: '28px' }} />
  </Wrapper>
);

export default ItemTask;

ItemTask.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  project: PropTypes.string,
  piority: PropTypes.string.isRequired,
};

ItemTask.defaultProps = {
  project: '',
};
