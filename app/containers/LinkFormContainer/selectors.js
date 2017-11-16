import { createSelector } from 'reselect';

/**
 * Direct selector to the linkFormContainer state domain
 */
const selectLinkFormContainerDomain = (state) => state.get('linkFormContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LinkFormContainer
 */

const makeSelectLinkFormContainer = () => createSelector(
  selectLinkFormContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectLinkFormContainer;
export {
  selectLinkFormContainerDomain,
};
