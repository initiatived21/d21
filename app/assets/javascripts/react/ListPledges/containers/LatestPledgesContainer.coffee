{ connect } = require('react-redux')
pledgeActions = require('../actions/pledgeActions')
LatestPledges = require('../components/LatestPledges')

mapStateToProps = (state) ->
  pledges: state.pledges

mapDispatchToProps = (dispatch) -> {}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestPledges)
