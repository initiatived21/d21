{ div, h2 } = React.DOM
{ PropTypes } = React
PledgeBrick = require('./PledgeBrick')
ChildComponent = require('../../react_base/components/ChildComponent')

module.exports = class LatestPledges extends ChildComponent
  @propTypes:
    pledges: PropTypes.object.isRequired

  render: ->
    div
      className: 'LatestPledges'

      h2 {}, @t('.latest_pledges_headline')

      for id, pledge of @props.pledges
        React.createElement PledgeBrick,
          key: id
          pledge: pledge
