import { connect } from 'react-redux'
import merge from 'lodash/merge'
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
      label: tag.name,
    }
  })
}

const mapDispatchToProps = dispatch => ({
  onLinkClick: function(event) {
    event.preventDefault()
    dispatch(toggleSessionPopup())
  },
  onSaveDraftClick: function(formObject) {
    dispatch(updateAction(formObject.name, 'commit', null, 'save_draft'))
  },
  onSavePreviewClick: function(formObject) {
    dispatch(updateAction(formObject.name, 'commit', null, ''))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeForm)
