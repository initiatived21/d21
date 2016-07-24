import { connect } from 'react-redux'
import values from 'lodash/values'
import PledgeList from '../../ElementList/components/PledgeList'

const mapStateToProps = (state, ownProps) => {
  const user = state.currentUser

  const pledges =
    values(state.pledges).filter(
      pledge => pledge.user_id === user.id
    )

  return {
    pledges
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeList)
