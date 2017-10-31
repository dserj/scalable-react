/**
*
* Navigation
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: red;
`;

function Navigation({ topics }) {
  return (
    <Wrapper>
      This is a navigation component with {topics.length} topics inside
    </Wrapper>
  );
}

Navigation.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;
