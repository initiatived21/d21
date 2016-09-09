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
import { BREAKPOINT_M, BREAKPOINT_L } from '../../lib/config'
import { setCurrentUser, setAuthToken } from '../../UserSession/actions/sessionActions'

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

  componentDidMount() {
    if (this.props.currentUser) {
      store.dispatch(setCurrentUser(this.props.currentUser.id))
    }
    store.dispatch(setAuthToken(this.props.authToken))
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
          <MediaQuery minWidth={BREAKPOINT_L}>
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
