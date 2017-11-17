/**
*
* Login
*
*/

import React from 'react';
import styled from 'styled-components';
import validator from 'email-validator';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';

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
  state = {};
  login = () => {
    const email = this.emailField.value(); // !!!IMPORTANT!!! how styles components work
    if (!validator.validate(email)) {
      this.setState({
        errorText: 'Please provide a valid e-mail',
      });
      return;
    }
    this.setState({
      errorText: null,
    });
    this.props.login(email);
  };
  cancelLogin = () => {
    this.props.cancelLogin();
  };
  render() {
    return (
      <Wrapper>
        <Heading>
          Login with your e-mail
        </Heading>
        <TextInput
          errorText={this.state.errorText}
          placeholder="Your e-mail"
          ref={(f) => { this.emailField = f; }} // !!!IMPORTANT!!! how styles components work
          type="text"
        />
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
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  cancelLogin: PropTypes.func.isRequired,
};

export default Login;
