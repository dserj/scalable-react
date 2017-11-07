/**
 *
 * LinkListContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLinkListContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import LinkList from '../../components/LinkList';
import { requestLinks } from './actions';

export class LinkListContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.requestLinks(this.props.match.params.topicName);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.match.params.topicName !== this.props.match.params.topicName) {
      this.props.requestLinks(newProps.match.params.topicName);
    }
  }
  render() {
    console.log('MATCH', this.props.match);
    return (
      <LinkList links={this.props.linkListContainer.links} routeTopicName={this.props.match.params.topicName} />
    );
  }
}

LinkListContainer.propTypes = {
  linkListContainer: PropTypes.shape({
    links: PropTypes.array.isRequired,
  }).isRequired,
  requestLinks: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      topicName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  linkListContainer: makeSelectLinkListContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestLinks: (topicName) => { dispatch(requestLinks(topicName)); },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'linkListContainer', reducer });
const withSaga = injectSaga({ key: 'linkListContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LinkListContainer);
