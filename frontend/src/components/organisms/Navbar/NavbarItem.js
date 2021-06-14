import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import NavbarData from './NavbarData';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #989898;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  padding: 20px 0px;
  margin-left: 20px;
`;

const SvgContainer = styled.div`
  > svg {
    font-size: 20px;
    padding-bottom: 0px;
    margin: 0px 35px 0px 30px;
  }
`;

const NavbarItem = ({ item }) => (
  <Wrapper>
    {NavbarData.map((items) => (
      <StyledLink to={items.path}>
        <SvgContainer>{items.icon}</SvgContainer>
        <Paragraph style={{ fontWeight: '600' }}>{items.title}</Paragraph>
      </StyledLink>
    ))}
  </Wrapper>
);

export default NavbarItem;

NavbarItem.propTypes = {
  item: PropTypes.element.isRequired,
};
