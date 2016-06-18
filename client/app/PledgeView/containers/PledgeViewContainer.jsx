import { connect } from 'react-redux'

import PledgeView from '../components/PledgeView'

const mapStateToProps = (state, ownProps) => {
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  pushIncluded
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeView)
