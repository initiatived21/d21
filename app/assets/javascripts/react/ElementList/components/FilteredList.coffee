pickBy = require('lodash/pickBy')
{ div, h2 } = React.DOM
{ PropTypes } = React
PledgeBrick = require('./PledgeBrick')
ChildComponent = require('../../lib/Base/components/ChildComponent')

module.exports = class LatestPledges extends ChildComponent
  @propTypes:
    pledges: PropTypes.object.isRequired

  FILTERS =
    successful: (e) -> e.aasm_state == 'successful'
    active: (e) -> e.aasm_state == 'active'

  render: ->
    { pledges, filter } = @props
    filteredList = pickBy pledges, FILTERS[filter]

    div
      className: 'LatestPledges'

      for id, pledge of filteredList
        React.createElement PledgeBrick,
          key: id
          pledge: pledge
