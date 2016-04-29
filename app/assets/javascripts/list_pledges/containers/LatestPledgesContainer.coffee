{ connect } = require('react-redux')
pledgeActions = require('../actions/pledgeActions')
LatestPledges = require('../components/LatestPledges')

mapStateToProps = (state) ->
  console.log 'mapping state to props', state
  pledges: state.pledges

mapDispatchToProps = (dispatch) -> {}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestPledges)
