/**
*
* LinkList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import Link from '../Link';
import IconButton from '../IconButton';

const Wrapper = styled.div``;

/* eslint no-unused-expressions: 0 */
injectGlobal`
  .button
  {
    box-shadow: rgba(0,0,0,0.156863) 0 3px 10px, rgba(0,0,0,0.227451) 0 3px 10px;
    border-radius: 50%;
    display: inline-block;
    position: fixed;
    right: 30px;
    top: 110px;
    background-color: #ff4081;
    padding: 25px;
    padding-left: 30px;
    padding-right: 30px;
    
    &:hover {
      background-color: #f9578e;
    }
  }
  .icon
  {
    color: #fff;
  }
`;

function LinkList({ links, routeTopicName, startAdd }) {
  const linkNodes = links.map((l) => (<Link key={l.id} link={l} />));
  return (
    <Wrapper>
      <h1>{routeTopicName}</h1>
      {linkNodes}
      <IconButton
        onClick={() => startAdd(routeTopicName)}
        icon="plus"
        buttonClass="button"
        iconClass="icon"
      />
    </Wrapper>
  );
}

LinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
  routeTopicName: PropTypes.string.isRequired,
  startAdd: PropTypes.func.isRequired,
};

export default LinkList;
