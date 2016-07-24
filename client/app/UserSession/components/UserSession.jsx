import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from '../../lib/store'
import RootComponent from '../../lib/Base/components/RootComponent';
import SessionContainer from '../containers/SessionContainer';

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
    const { currentUser, authToken } = this.props

    return (
      <Provider store={store}>
        <SessionContainer authToken={authToken} currentUser={currentUser} />
      </Provider>
    )
  }
}
