/**
*
* AppBar
*
*/

import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FontAwesomeStyled = styled(FontAwesome)`
  font-size: 20px;
  color: #fff;
  &:hover {
    color: #e5e5e5;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #00afcc;
  color: #fff;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
`;
const AppBarDiv = styled.div``;
const IconButton = styled.div`
  cursor: pointer;
  margin-right: 15px;
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
      <AppBarDiv>
        <IconButton onClick={toggleDrawer}>
          <FontAwesomeStyled className="icon" name="bars" />
        </IconButton>
      </AppBarDiv>
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
