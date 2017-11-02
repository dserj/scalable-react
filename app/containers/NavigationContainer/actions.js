/*
 *
 * NavigationContainer actions
 *
 */

import * as actions from './constants';

export function requestTopics() {
  return {
    type: actions.REQUEST_TOPICS,
  };
}

export function requestTopicsSucceeded(topics) {
  return {
    type: actions.REQUEST_TOPICS_SUCCEEDED,
    topics,
  };
}

export function requestTopicsFailed(message) {
  return {
    type: actions.REQUEST_TOPICS_FAILED,
    message,
  };
}

export function selectTopic(topic) {
  return {
    type: actions.SELECT_TOPIC,
    topic,
  };
}

export function toggleDrawer() {
  return {
    type: actions.TOGGLE_DRAWER,
  };
}
