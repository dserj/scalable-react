/**
*
* LinkForm
*
*/

import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import TextInput from '../TextInput';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  .input {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Wrapper = styled.div`
  background-color: #fff;
  width: 320px;
  padding: 25px;
  border-radius: 2px;
  position: fixed;
  top: 25%;
  left: 50%;
  margin-left: -160px; // half of the width
`;

const Heading = styled.div`
  font-size: 22px;
  color: #222;
  margin-bottom: 20px;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
`;

const Button = styled.div`
  text-transform: uppercase;
  padding: 10px;
  border-radius: 2px;
  cursor: pointer;
  color: #00afcc;
  
  &:hover {
    background-color: rgba(0,0,0,0.15);
    font-weight: 700;
  }
`;

const ErrorMessage = styled.div`
  color: #ce1313;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.6);
  overflow-x: hidden; // get rid of scrollbars
`;

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {};
  render() {
    const fieldError = this.state.errorText ? (
      <ErrorMessage>
        {this.state.errorText}
      </ErrorMessage>
    ) : null;
    return (
      <Overlay>
        <Wrapper>
          <Heading>
            Add a link
          </Heading>
          <TextInput
            className="input"
            placeholder="URL"
          />
          <TextInput
            className="input"
            placeholder="Description"
          />
          {fieldError}
          <ActionContainer>
            <Button
              onClick={this.cancelLogin}
            >
              Cancel
            </Button>
            <Button
              onClick={this.login}
            >
              Login
            </Button>
          </ActionContainer>
        </Wrapper>
      </Overlay>
    );
  }
}

LinkForm.propTypes = {

};

export default LinkForm;
