import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../../lib/store'
import I18n from 'i18n-js'
import RootComponent from '../../lib/Base/components/RootComponent'
import ProfileUserForm from '../containers/ProfileUserForm'
import ProfilePledgeListContainer
  from '../containers/ProfilePledgeListContainer'

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
        <div className="o-wrapper">
          <h1>{I18n.t('ProfileView.heading')}</h1>

          <h2>Ihre Daten</h2>
          <ProfileUserForm formConfig={this.props.editForm} />

          <hr className="c-ruler" />

          <h2 id="your_pledges">Ihre Versprechen</h2>
          <ProfilePledgeListContainer />
        </div>
      </Provider>
    )
  }
}
