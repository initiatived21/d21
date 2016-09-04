import React, { PropTypes } from 'react'
import RootComponent from '../../lib/Base/components/RootComponent'
import { Provider } from 'react-redux'
import MediaQuery from 'react-responsive'
import store from '../../lib/store'
import PrimaryNav from './PrimaryNav'
import SecondaryNav from './SecondaryNav'
import HeaderLogo from './HeaderLogo'
import SocialMediaIcons from './SocialMediaIcons'
import SearchBar from './SearchBar'
import MenuButton from './MenuButton'
import { BREAKPOINT_M } from '../../lib/config'

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

  handleLeftSwipe(e) {
    const el = document.getElementById('site-wrapper')
    el.classList.remove('show-nav')
  }

  handleRightSwipe(e) {
    const el = document.getElementById('site-wrapper')
    el.classList.add('show-nav')
  }

  render() {
    const { controller, action, authToken, currentUser } = this.props

    return (
      <Provider store={store}>
        <div className="o-wrapper">
          <MediaQuery maxWidth={BREAKPOINT_M - 1}>
            <MenuButton />
          </MediaQuery>
          <SecondaryNav authToken={authToken} currentUser={currentUser} />
          <HeaderLogo />
          <SearchBar />
          <MediaQuery minWidth={BREAKPOINT_M}>
            <SocialMediaIcons />
          </MediaQuery>
          <MediaQuery minWidth={BREAKPOINT_M}>
            <PrimaryNav controller={controller} action={action} />
          </MediaQuery>
        </div>
      </Provider>
    )
  }
}
