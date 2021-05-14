import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
`;

export const DashboardTemplate = ({ children }) => <Wrapper>{children}</Wrapper>;

DashboardTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
