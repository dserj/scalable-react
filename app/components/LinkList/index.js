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

function LinkList({ links }) {
  const linkNodes = links.map((l) => (<Link key={l.id} link={l} />));
  return (
    <Wrapper>
      {linkNodes}
    </Wrapper>
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
