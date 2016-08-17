import { connect } from 'react-redux'
import merge from 'lodash/merge'
import I18n from 'i18n-js'
import { setEntity } from '../../lib/actions/entityActions'
import { toggleSessionPopup } from '../../UserSession/actions/SessionActions'
import PledgeForm from '../components/PledgeForm'
import updateAction from '../../lib/Form/actions/updateAction'

const mapStateToProps = function(state, ownProps) {
  return {
    availableTags: assembleTags(ownProps.tags),
    currentUser: state.currentUser,
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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeForm)
