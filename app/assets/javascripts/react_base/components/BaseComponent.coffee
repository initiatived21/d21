# BaseComponent - should be used as ancestor for localized "Dumb"
# Components
#
# Provides a lazy translation method.
class @BaseComponent extends React.Component
  t: (attrs...) ->
    I18n.t(@constructor.name + attrs.shift(), attrs...)
