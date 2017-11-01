import { createSelector } from 'reselect';

/**
 * Direct selector to the linkListContainer state domain
 */
const selectLinkListContainerDomain = (state) => state.get('linkListContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LinkListContainer
 */

const makeSelectLinkListContainer = () => createSelector(
  selectLinkListContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectLinkListContainer;
export {
  selectLinkListContainerDomain,
};
