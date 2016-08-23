// ChildComponent - should be used as ancestor for localized "Dumb"
// Components
//
// Provides a lazy translation method.
import React from 'react'
import I18n from 'i18n-js'

export default class ChildComponent extends React.Component {
  constructor() {
    super()
    // comment the following for testing:
    I18n.missingTranslation = function () { return '' }
  }
  t(...attrs) {
    // Emulate lazy lookup
    const path = attrs.shift()
    const basePath = (path[0] == '.') ? this.constructor.name : ''

    // Forward to I18n
    return I18n.t(basePath + path, ...attrs)
  }
}
