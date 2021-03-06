// RootComponent to be used for containers directly rendered in a rails view.
//
// This corrects the set locale, mostly for server side rendering.
// Also provides default behaviour to send server-provided objects directly
// to the state
import React from 'react'
import I18n from 'i18n-js'
import merge from 'lodash/merge'

import store from '../../store'
import normalized from '../../normalization'
import { addEntities } from '../../actions/entityActions'

export default class RootComponent extends React.Component {
  static propTypes = {
    locale: React.PropTypes.string.isRequired
  }

  constructor(props) {
    I18n.locale = props.locale

    // We need this for CSS (e.g. quotes) to work properly.
    if (typeof document !== 'undefined') {
      document.documentElement.lang = props.locale
    }

    super(props)
  }

  componentWillMount() {
    this.pushServerProvidedObjectsToState()
  }

  get objectsToForwardToState() {
    return []
  }

  pushServerProvidedObjectsToState() {
    let pushableObject = {}

    if (this.objectsToForwardToState.length > 0) {

      for (let objectName of this.objectsToForwardToState) {
        if (!this.props[objectName]) { continue }

        merge(
          pushableObject,
          normalized(objectName, this.props[objectName]).entities
        )
      }

      store.dispatch(addEntities(pushableObject))
    }
  }
}
