import { connect } from 'react-redux'
import onClickOutside from 'react-onclickoutside'

import Session from '../components/Session'
import { toggleSessionPopup, hideSessionPopup } from '../actions/SessionActions'

const mapStateToProps = (state, ownProps) => ({
  isVisible: state.ui.sessionPopupVisible
})

const mapDispatchToProps = dispatch => ({
  onLoginClick: function(event) {
    event.preventDefault()
    dispatch(toggleSessionPopup())
  },
  onWindowClick: function(event) {
    dispatch(hideSessionPopup())
  }
})

const OnClickOutsideWrappedComponent = onClickOutside(Session)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnClickOutsideWrappedComponent)
