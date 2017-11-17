/**
 *
 * LinkFormContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLinkFormContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import LinkForm from '../../components/LinkForm';
import { addLink } from './actions';

export class LinkFormContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    // console.log('PROPS', this.props);
    return (
      <LinkForm {...this.props} />
    );
  }
}

LinkFormContainer.propTypes = {
// eslint-disable-next-line react/no-unused-prop-types
  addLink: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  linkformcontainer: makeSelectLinkFormContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    addLink: (link) => dispatch(addLink(link)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'linkFormContainer', reducer });
const withSaga = injectSaga({ key: 'linkFormContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LinkFormContainer);
