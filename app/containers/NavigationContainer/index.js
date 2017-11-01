/**
 *
 * NavigationContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNavigationContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import Navigation from '../../components/Navigation';
import { requestTopics } from './actions';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.requestTopics();
  }
  render() {
    return (
      <Navigation {...this.props.navigationcontainer} />
    );
  }
}

NavigationContainer.propTypes = {
  navigationcontainer: PropTypes.object.isRequired,
  requestTopics: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  navigationcontainer: makeSelectNavigationContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestTopics: () => dispatch(requestTopics()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'navigationContainer', reducer });
const withSaga = injectSaga({ key: 'navigationContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NavigationContainer);
