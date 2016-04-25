# BaseContainer to be used for containers directly rendered in a rails view.
#
# This corrects the set locale, mostly for server side rendering.
class @BaseContainer extends React.Component
  constructor: (props) ->
    super(props)
    I18n.locale = props.locale
