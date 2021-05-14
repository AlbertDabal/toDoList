import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavbarItem = ({ item }) => (
  <Wrapper>
    {item.map((items) => (
      <Paragraph to="test">{items.title}</Paragraph>
    ))}
  </Wrapper>
);

export default NavbarItem;

NavbarItem.propTypes = {
  item: PropTypes.element.isRequired,
};
