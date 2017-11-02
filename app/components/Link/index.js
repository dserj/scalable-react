/**
*
* Link
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  margin-bottom: 10px;
  box-shadow: rgba(0,0,0,0.117647) 0 1px 6px, rgba(0,0,0,0.117647) 0 1px 4px;
  padding: 10px;
  margin-top: 20px;
`;

function Link({ link }) {
  return (
    <Wrapper>
      {link.url}
    </Wrapper>
  );
}

Link.propTypes = {
  link: PropTypes.shape({
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Link;
