import { connect } from 'react-redux'
import values from 'lodash/values'
import PledgeUpdateList from '../components/PledgeUpdateList'

const mapStateToProps = (state, ownProps) => {
  const updates =
    values(state.entities.updates).filter(
      update => update.pledge_id == ownProps.pledge_id
    )

  return {
    updates
  }
}

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeUpdateList)
