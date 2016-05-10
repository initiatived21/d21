{ connect } = require('react-redux')
# pledgeActions = require('../actions/pledgeActions')
FilteredList = require('../components/FilteredList')

mapStateToProps = (state) ->
  pledges: state.pledges or {}

mapDispatchToProps = (dispatch) -> {}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredList)
