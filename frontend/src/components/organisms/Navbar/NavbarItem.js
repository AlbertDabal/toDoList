import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px 0px;

  > svg {
    font-size: 20px;
    padding-bottom: 0px;
    margin: 0 10px 0px 2px;
  }
`;

const NavbarItem = ({ item }) => (
  <Wrapper>
    {item.map((items) => (
      <StyledLink to={items.path}>
        {items.icon}
        {items.title}
      </StyledLink>
    ))}
  </Wrapper>
);

export default NavbarItem;

NavbarItem.propTypes = {
  item: PropTypes.element.isRequired,
};
