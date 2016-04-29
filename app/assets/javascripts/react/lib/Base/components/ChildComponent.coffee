# ChildComponent - should be used as ancestor for localized "Dumb"
# Components
#
# Provides a lazy translation method.
module.exports = class ChildComponent extends React.Component
  t: (attrs...) ->
    I18n.t(@constructor.name + attrs.shift(), attrs...)
