/**
*
* Navigation
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from '../AppBar';
import Drawer from '../Drawer';

const Wrapper = styled.div`
  background-color: red;
`;

function Navigation({ topics, selectTopic, toggleDrawer, isDrawerOpen }) {
  return (
    <Wrapper>
      <AppBar toggleDrawer={toggleDrawer} />
      <Drawer
        items={topics}
        selectItem={selectTopic}
        itemLabelAttr="name"
        itemKeyAttr="name"
        isDrawerOpen={isDrawerOpen}
      />
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
  isDrawerOpen: PropTypes.bool.isRequired,
};

export default Navigation;
