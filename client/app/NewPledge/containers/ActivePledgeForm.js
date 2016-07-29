import { connect } from 'react-redux'
import merge from 'lodash/merge'
import { setEntity } from '../../lib/actions/entityActions'
import { toggleSessionPopup } from '../../UserSession/actions/SessionActions'
import PledgeForm from '../components/PledgeForm'

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
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeForm)
