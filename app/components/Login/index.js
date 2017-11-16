/**
*
* Login
*
*/

import React from 'react';
import styled from 'styled-components';
import validator from 'email-validator';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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

const ErrorMessage = styled.div`
  color: #ce1313;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
`;

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {};
  login = () => {
    const email = this.emailField.value;
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
    const fieldError = this.state.errorText ? (
      <ErrorMessage>
        {this.state.errorText}
      </ErrorMessage>
    ) : null;
    return (
      <Wrapper>
        <Heading>
          Login with your e-mail
        </Heading>
        <EmailInput
          className={classNames('', { error: this.state.errorText })}
          placeholder="Your e-mail"
          innerRef={(f) => { this.emailField = f; }} // !!!IMPORTANT!!! how styles components work
          type="text"
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
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  cancelLogin: PropTypes.func.isRequired,
};

export default Login;
