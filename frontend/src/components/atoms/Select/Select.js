import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from '../Input/Input';
import Paragraph from '../Paragraph/Paragraph';

const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};
  border: none;

  outline: none;
  width: 100%;
`;

const WrapperTest = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 520px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  max-height: 150px;
  overflow-y: scroll;

  > p {
    padding: 10px;
    font-weight: 500;
    padding-left: 20px;
    color: rgba(0, 0, 0, 0.7);
  }

  > p:first-child {
    margin-top: 20px;
  }

  > p:last-child {
    margin-bottom: 20px;
  }

  > p:hover {
    background-color: #ccc;
    padding: 10px;
    padding-left: 20px;
  }
`;

const Select = ({ data, setSelectedProject }) => {
  const node = useRef();
  const [result, setResult] = useState(data);
  const [open, setOpen] = useState(false);
  const [valueName, setValueName] = useState(null);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  const handleChange = (selectedValue) => {
    setOpen(false);
    setValueName(selectedValue);
    setSelectedProject(selectedValue);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  function onTodoChange(value) {
    setValueName(value);
    setSelectedProject(value);
    setResult(data.filter((items) => items.project.indexOf(value) === 0));
  }

  return (
    <Wrapper ref={node}>
      <Input
        name="project"
        onChange={(e) => onTodoChange(e.target.value)}
        placeholder="Choose project"
        onClick={(e) => setOpen(!open)}
        value={valueName}
        autoComplete="off"
      />
      {open && (
        <WrapperTest>
          {result.map((items) => (
            <Paragraph onClick={(e) => handleChange(items.project)}>{items.project}</Paragraph>
          ))}
        </WrapperTest>
      )}
    </Wrapper>
  );
};

export default Select;

Select.propTypes = {
  data: PropTypes.element.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
};
