{ article, header, h3, p, main, footer, a } = React.DOM
{ PropTypes } = React
ChildComponent = require('../../react_base/components/ChildComponent')

module.exports = class PledgeBrick extends ChildComponent
  @propTypes:
    pledge: PropTypes.shape
      id: PropTypes.number.isRequired
      content: PropTypes.string.isRequired
      amount: PropTypes.number.isRequired
      who: PropTypes.string.isRequired
      requirement: PropTypes.string.isRequired
      deadline: PropTypes.string.isRequired
      signatures_count: PropTypes.number.isRequired

  render: ->
    { pledge } = @props

    article
      className: 'PledgeBrick'

      header
        className: 'PledgeBrick-Initiator'
        h3 {}, 'Initiator'
        # p {}, pledge.initiator.organization

      main
        className: 'PledgeBrick-Pledge'

        a
          href: "/#{I18n.locale}/pledges/#{pledge.id}"
          "Wir versprechen, #{pledge.content}, wenn #{pledge.amount}
          #{pledge.who} #{pledge.requirement}."

        p {}, pledge.deadline

        p {}, "#{pledge.signatures_count} von #{pledge.amount} Unterzeichnern"

      footer
        className: 'PledgeBrick-Footer'
        '[Share Buttons]'
