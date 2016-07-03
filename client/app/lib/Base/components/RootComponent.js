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
  constructor(props) {
    I18n.locale = props.locale

    // We need this for CSS (e.g. quotes) to work properly.
    if (typeof document !== 'undefined') {
      document.documentElement.lang = props.locale
    }

    return super(props)
  }

  componentWillMount() {
    this.pushServerProvidedObjectsToState()
  }

  get objectsToForwardToState() {
    return []
  }

  pushServerProvidedObjectsToState() {
    if (this.objectsToForwardToState.length == 0) { return }

    let pushableObject = {}
    for (let objectName of this.objectsToForwardToState) {
      merge(
        pushableObject,
        normalized(objectName, this.props[objectName]).entities
      )
    }
    store.dispatch(addEntities(pushableObject))
  }
}
