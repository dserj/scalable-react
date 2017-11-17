/**
*
* IconButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import classNames from 'classnames';

const FontAwesomeStyled = styled(FontAwesome)`
  font-size: 20px;
  color: #fff;
  &:hover {
    color: #e5e5e5;
  }
`;

const IconButtonWrapper = styled.div`
  text-align: center;
  cursor: pointer;
  margin-right: 15px;
`;

function IconButton({ onClick, icon, iconClass, buttonClass }) {
  return (
    <IconButtonWrapper
      onClick={onClick}
      className={classNames('', buttonClass)}
    >
      <FontAwesomeStyled
        className={classNames('', iconClass)}
        name={icon}
      />
    </IconButtonWrapper>
  );
}

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  iconClass: PropTypes.string,
  buttonClass: PropTypes.string,
};

export default IconButton;
