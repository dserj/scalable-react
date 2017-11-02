/**
*
* AppBar
*
*/

import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

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
`;

function AppBar() {
  return (
    <Wrapper>
      <AppBarDiv>
        <IconButton>
          <FontAwesomeStyled className="icon" name="bars" />
        </IconButton>
      </AppBarDiv>
      <Heading>
        Coder daily
      </Heading>
      <LinkContainer>
        log in
      </LinkContainer>
    </Wrapper>
  );
}

AppBar.propTypes = {

};

export default AppBar;
