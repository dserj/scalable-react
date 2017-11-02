/**
*
* Navigation
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from '../AppBar';

const Wrapper = styled.div`
  background-color: red;
`;

function Navigation({ topics, selectTopic, toggleDrawer }) {
  const topicNodes = topics.map((t) => (
    <div onClick={() => selectTopic(t)} key={t.name}>{t.name}</div> // eslint-disable-line
  ));
  return (
    <Wrapper>
      <AppBar toggleDrawer={toggleDrawer} />
      {topicNodes}
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
  selectTopic: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default Navigation;
