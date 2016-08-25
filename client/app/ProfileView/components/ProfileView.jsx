import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../../lib/store'
import I18n from 'i18n-js'
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
          <div className="o-wrapper u-mb">
            <h1>{I18n.t('ProfileView.heading')}</h1>

            <h2>Ihre Versprechen</h2>
            <ProfilePledgeListContainer />

          </div>
        </main>
      </Provider>
    )
  }
}
