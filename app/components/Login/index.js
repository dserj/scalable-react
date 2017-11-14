/**
*
* Login
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: rgba(0,0,0,0.12) 0 1px 6px, rgba(0,0,0,0.12) 0 1px 4px;
  width: 320px;
  padding: 25px;
  border-radius: 2px;
  margin: 100px auto;
`;

const Heading = styled.div`
  font-size: 22px;
  color: #222;
  margin-bottom: 20px;
`;

const EmailInput = styled.input`
  border-bottom: solid 1px rgba(0,0,0,0.12);
  padding: 5px;
  border-top: 0;  
  border-left: 0;  
  border-right: 0;
  width: 100%;
  font-size: 18px;  
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

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  login = () => {
    console.log('LOGIN BUTTON CLICKED!!!', this.emailField.value);
  };
  render() {
    return (
      <Wrapper>
        <Heading>
          Login with your e-mail
        </Heading>
        <EmailInput
          placeholder="Your e-mail"
          innerRef={(f) => { this.emailField = f; }} // !!!IMPORTANT!!! how styles components work
          type="text"
        />
        <ActionContainer>
          <Button>
            Cancel
          </Button>
          <Button
            onClick={this.login}
          >
            Login
          </Button>
        </ActionContainer>
      </Wrapper>
    );
  }
}

Login.propTypes = {

};

export default Login;
