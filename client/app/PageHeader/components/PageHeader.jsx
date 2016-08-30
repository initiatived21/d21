import React, { PropTypes } from 'react'
import RootComponent from '../../lib/Base/components/RootComponent'
import { Provider } from 'react-redux'
import store from '../../lib/store'
import PrimaryNav from './PrimaryNav'
import SecondaryNav from './SecondaryNav'
import HeaderLogo from './HeaderLogo'
import SearchBar from './SearchBar'

export default class PageHeader extends RootComponent {
  static propTypes = {
    controller: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    currentUser: PropTypes.object,
    authToken: PropTypes.string.isRequired,
  }

  get objectsToForwardToState() {
    return ['currentUser']
  }

  get objectsToForwardToStateUnnormalized() {
    return ['currentUser', 'authToken']
  }

  render() {
    const { controller, action, authToken, currentUser } = this.props

    return (
      <Provider store={store}>
        <div className="o-wrapper">
          <SecondaryNav authToken={authToken} currentUser={currentUser} />

          <div className="c-page-head__main">
            <HeaderLogo />
            <SearchBar />
          </div>

          <PrimaryNav controller={controller} action={action} />
        </div>
      </Provider>
    )
  }
}
