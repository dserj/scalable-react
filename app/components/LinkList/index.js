/**
*
* LinkList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.div`
  background-color: blue 
`;

function LinkList({ links }) {
  const linkNodes = links.map((l) => (<Link key={l.id}>{l.url} - {l.description}</Link>));
  return (
    <div>
      {linkNodes}
    </div>
  );
}

LinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
};

export default LinkList;
