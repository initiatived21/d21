import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from '../../lib/store'
import RootComponent from '../../lib/Base/components/RootComponent';
import SignInFormContainer from '../containers/SignInFormContainer';
import LoggedIn from './LoggedIn';

export default class UserSession extends RootComponent {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    authToken: PropTypes.string.isRequired,
  }

  get objectsToForwardToState() {
    return ['currentUser']
  }

  get objectsToForwardToStateUnnormalized() {
    return ['currentUser', 'authToken']
  }

  render() {
    let loggedInOrOutComponent
    if (this.props.currentUser) {
      loggedInOrOutComponent = <LoggedIn currentUser={this.props.currentUser} />
    } else {
      loggedInOrOutComponent = <SignInFormContainer />
    }

    return (
      <Provider className="hello" store={store}>
        {loggedInOrOutComponent}
      </Provider>
    )
  }
}
