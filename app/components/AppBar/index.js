/**
*
* AppBar
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from '../../components/IconButton';

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #00afcc;
  color: #fff;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
`;
const Heading = styled.div`
  text-align: left;
  display: flex;
  flex-grow: 2;
`;
const LinkContainer = styled.div`
  font-size: 16px;
  margin-top: 6px;
`;

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || (<Link to="/login">login</Link>);
  return (
    <Wrapper>
      <IconButton onClick={toggleDrawer} icon="bars" />
      <Heading>
        Coder daily
      </Heading>
      <LinkContainer>
        {loginLink}
      </LinkContainer>
    </Wrapper>
  );
}

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  email: PropTypes.string,
};

export default AppBar;
