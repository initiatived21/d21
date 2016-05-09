pickBy = require('lodash/pickBy')
{ div, h2 } = React.DOM
{ PropTypes } = React
PledgeBrick = require('./PledgeBrick')
ChildComponent = require('../../lib/Base/components/ChildComponent')

module.exports = class FilteredList extends ChildComponent
  @propTypes:
    pledges: PropTypes.object.isRequired
    filter: PropTypes.string.isRequired

  render: ->
    FILTERS =
      successful: (e) -> e.aasm_state == 'successful'
      active: (e) -> e.aasm_state == 'active'
    { pledges, filter } = @props
    filteredList = pickBy pledges, FILTERS[filter]

    div
      className: 'FilteredList'

      for id, pledge of filteredList
        React.createElement PledgeBrick,
          key: id
          pledge: pledge
