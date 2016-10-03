import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../../lib/store'
import I18n from 'i18n-js'
import RootComponent from '../../lib/Base/components/RootComponent'
import ProfileUserForm from '../containers/ProfileUserForm'
import ProfilePledgeListContainer
  from '../containers/ProfilePledgeListContainer'
import { setServerImage } from '../../Inputs/actions/imageInputActions'

export default class ProfileView extends RootComponent {
  static propTypes = {
    pledges: PropTypes.array.isRequired,
  }

  get objectsToForwardToState() {
    return ['pledges']
  }

  constructor(props) {
    super(props)
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount() {
    super.componentWillMount()

    const avatarUrl = this.props.editForm.seedData.fields.avatar.avatar.url
    if (avatarUrl) {
      store.dispatch(setServerImage('avatar', avatarUrl))
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="o-wrapper">
          <h1>{I18n.t('ProfileView.heading')}</h1>

          <h2>{I18n.t('ProfileView.your_data')}</h2>
          <ProfileUserForm formConfig={this.props.editForm} />

          <hr className="c-ruler" />

          <h2 id="your_pledges">{I18n.t('ProfileView.your_pledges')}</h2>
          <ProfilePledgeListContainer />
        </div>
      </Provider>
    )
  }
}
