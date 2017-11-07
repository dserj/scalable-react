/**
*
* LinkList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from '../Link';

const Wrapper = styled.div``;

function LinkList({ links, routeTopicName }) {
  const linkNodes = links.map((l) => (<Link key={l.id} link={l} />));
  return (
    <Wrapper>
      <h1>{routeTopicName}</h1>
      <div>{linkNodes}</div>
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
};

export default LinkList;
