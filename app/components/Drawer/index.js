/**
*
* Drawer
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

const Item = styled.div`
  padding: 25px;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: solid 1px #f6f6f6;
  
  &:hover {
    background-color: #f6f6f6;
  }
`;
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: -300px;
  height: 100%;
  width: 300px;
  background: #fff;
  padding: 0;
  transition: .75s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.15) 0 3px 10px, rgba(0, 0, 0, 0.22) 0 3px 10px;
  z-index: 1000;
`;

function Drawer({ items, selectItem, itemLabelAttr, itemKeyAttr, isDrawerOpen }) {
  const itemNodes = items.map((item) => (
    <Item
      key={item[itemKeyAttr]}
      onClick={() => selectItem(item)}
    >
      {item[itemLabelAttr]}
    </Item>
  ));
  return (
    <Wrapper className={classNames('', { drawerOpen: isDrawerOpen })}>
      {itemNodes}
    </Wrapper>
  );
}

Drawer.propTypes = {
  items: PropTypes.array.isRequired,
  selectItem: PropTypes.func.isRequired,
  itemLabelAttr: PropTypes.string.isRequired,
  itemKeyAttr: PropTypes.string.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};

export default Drawer;
