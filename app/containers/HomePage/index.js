/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationContainer from '../../containers/NavigationContainer';
import LinkListContainer from '../../containers/LinkListContainer';
import LoginContainer from '../../containers/LoginContainer';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavigationContainer />
        <Switch>
          <Route exact path={'/login'} component={LoginContainer} />
          <Route exact path={'/topics/:topicName'} component={LinkListContainer} />
        </Switch>
      </div>
    );
  }
}
