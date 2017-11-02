/**
*
* Drawer
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div``;
const Item = styled.div``;

function Drawer({ items, selectItem, itemLabelAttr, itemKeyAttr }) {
  const itemNodes = items.map((item) => (
    <Item
      key={item[itemKeyAttr]}
      onClick={() => selectItem(item)}
    >
      {item[itemLabelAttr]}
    </Item>
  ));
  return (
    <Wrapper>
      {itemNodes}
    </Wrapper>
  );
}

Drawer.propTypes = {
  items: PropTypes.array.isRequired,
  selectItem: PropTypes.func.isRequired,
  itemLabelAttr: PropTypes.string.isRequired,
  itemKeyAttr: PropTypes.string.isRequired,
};

export default Drawer;
