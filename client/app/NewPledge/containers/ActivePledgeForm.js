import { connect } from 'react-redux'
import I18n from 'i18n-js'
import { toggleSessionPopup } from '../../UserSession/actions/sessionActions'
import { setEntity } from '../../lib/actions/entityActions'
import PledgeForm from '../components/PledgeForm'

const mapStateToProps = function(state, ownProps) {
  return {
    availableTags: assembleTags(ownProps.tags),
    userLoggedIn: state.currentUser !== null,
    formId: ['PledgeForm', ownProps.id].join('-'),
  }
}

function assembleTags(tags) {
  return tags.map(function(tag) {
    return {
      value: tag.id,
      label: I18n.t(`tags.names.${tag.name}`),
    }
  })
}

const mapDispatchToProps = dispatch => ({
  onLinkClick: function(event) {
    event.preventDefault()

    dispatch(toggleSessionPopup())
    window.scrollTo(0, 0)
  },

  dispatch
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,

  afterResponse: json => {
    console.log(json)
    if (json.status === 'success') {
      dispatchProps.dispatch(setEntity(stateProps.formId, {}))
    }
  }
})


export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(PledgeForm)
