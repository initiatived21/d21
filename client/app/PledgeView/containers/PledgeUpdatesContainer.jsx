import { connect } from 'react-redux'
import values from 'lodash/values'
import PledgeUpdates from '../components/PledgeUpdates'

const mapStateToProps = (state, ownProps) => {
  const updates =
    values(state.updates).filter(
      update => update.pledge_id == ownProps.pledge_id
    )

  return {
    updates
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeUpdates)
