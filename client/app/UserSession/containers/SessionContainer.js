import { connect } from 'react-redux'
import onClickOutside from 'react-onclickoutside'

import Session from '../components/Session'
import { toggleSessionPopup, hideSessionPopup } from '../actions/SessionActions'

const mapStateToProps = (state) => ({
  isVisible: state.ui.sessionPopupVisible
})

const mapDispatchToProps = dispatch => ({
  onLoginClick: function(event) {
    event.preventDefault()
    dispatch(toggleSessionPopup())
  },
  dispatch
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,

  onWindowClick: function() {
    if (!stateProps.isVisible) return true
    dispatchProps.dispatch(hideSessionPopup())
  }
})

const OnClickOutsideWrappedComponent = onClickOutside(Session)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(OnClickOutsideWrappedComponent)
