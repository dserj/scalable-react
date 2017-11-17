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
const VotingContainer = styled.div`
  padding: 15px;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  font-size: 16px;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;
const Description = styled.div`
  color: #757575;
`;
const VotingCount = styled.div`
  font-size: 20px;
  text-align: center;
  padding-bottom: 5px;
  padding-top: 5px;
`;
// const VotingIcon = styled.div`
//   font-size: 40px;
// `;

function Link({ link }) {
  return (
    <Wrapper>
      <VotingContainer>
        <VotingCount>
          {link.voteCount}
        </VotingCount>
      </VotingContainer>
      <DetailsContainer>
        <div>
          <StyledLink href={link.url}>{link.url}</StyledLink>
        </div>
        <Description>
          {link.description}
        </Description>
      </DetailsContainer>
    </Wrapper>
  );
}

Link.propTypes = {
  link: PropTypes.shape({
    voteCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Link;
