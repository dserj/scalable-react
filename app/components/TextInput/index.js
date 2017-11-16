/**
*
* TextInput
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Wrapper = styled.div``;
const ErrorMessage = styled.div`
  color: #ce1313;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
`;
const TextInputWrapper = styled.input`
  border-bottom: solid 1px rgba(0,0,0,0.12);
  padding: 5px;
  border-top: 0;  
  border-left: 0;  
  border-right: 0;
  width: 100%;
  font-size: 18px;
  
  &:focus {
    outline: none;
    border-bottom-color: #00afcc;
    border-bottom-width: 2px;
  }
`;

class TextInput extends React.Component { // eslint-disable-line react/prefer-stateless-function
  value() {
    return this.field.value;
  }
  render() {
    const { errorText } = this.props;
    const fieldError = errorText ? (
      <ErrorMessage>
        {errorText}
      </ErrorMessage>
    ) : null;
    return (
      <Wrapper>
        <TextInputWrapper
          className={classNames('', this.props.className, { error: errorText })}
          placeholder={this.props.placeholder}
          innerRef={(f) => { this.field = f; }} // !!!IMPORTANT!!! innerRef ==>> how styles components work
          type="text"
        />
        {fieldError}
      </Wrapper>
    );
  }
}

TextInput.propTypes = {
  errorText: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default TextInput;
