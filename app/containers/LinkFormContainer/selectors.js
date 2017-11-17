import { createSelector } from 'reselect';

/**
 * Direct selector to the linkFormContainer state domain
 */
const selectLinkFormContainerDomain = (state) => state.get('linkFormContainer');
const selectRouteTopic = (state, props) => props.match.params.topicName;
/**
 * Other specific selectors
 */


/**
 * Default selector used by LinkFormContainer
 */

const makeSelectLinkFormContainer = () => createSelector(
  selectLinkFormContainerDomain,
  selectRouteTopic,
  (substate, topicName) => Object.assign(substate.toJS(), { topicName })
);

export default makeSelectLinkFormContainer;
export {
  selectLinkFormContainerDomain,
};
