import { createSelector } from 'reselect';
import selectNavigationContainer from '../NavigationContainer/selectors';

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

const selectRouteTopic = () => (state, props) => props.match.params.topicName;
const selectTopic = () => createSelector(
  selectNavigationContainer(),
  selectRouteTopic(),
  (navigationState, routeTopicName) => {
    const selectedTopic = navigationState.topics.find((t) => t.name === routeTopicName);
    // console.log('SELECTED TOPIC: ', selectedTopic);
    return selectedTopic || { name: '' };
  }
);

const makeSelectLinkListContainer = () => createSelector(
  selectLinkListContainerDomain,
  selectTopic(),
  (substate, routeTopicName) => Object.assign(substate.toJS(), { routeTopicName })
);

export default makeSelectLinkListContainer;
export {
  selectLinkListContainerDomain,
};
