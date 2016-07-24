import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../../lib/store'
import RootComponent from '../../lib/Base/components/RootComponent'
import ProfilePledgeListContainer from '../containers/ProfilePledgeListContainer'

export default class ProfileView extends RootComponent {
  static propTypes = {
    pledges: PropTypes.array.isRequired,
  }

  get objectsToForwardToState() {
    return ['pledges']
  }

  render() {
    return (
      <Provider store={store}>
        <main>
          <h1>Profile</h1>
          <ProfilePledgeListContainer />
        </main>
      </Provider>
    )
  }
}
