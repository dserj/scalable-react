import { createSelector } from 'reselect';

// (*) how to get data from other's component state
import selectLoginContainer from '../LoginContainer/selectors';

/**
 * Direct selector to the navigationContainer state domain
 */
const selectNavigationContainerDomain = (state) => state.get('navigationContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavigationContainer
 */

const makeSelectNavigationContainer = () => createSelector(
  selectNavigationContainerDomain, // navigationContainer state
  selectLoginContainer(), // (*) login container state
  (substate, loginSubstate) => Object.assign(substate.toJS(), loginSubstate) // (*)
);

export default makeSelectNavigationContainer;
export {
  selectNavigationContainerDomain,
};
