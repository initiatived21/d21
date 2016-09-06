import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../../lib/store'
import FlashMessageListContainer from '../containers/FlashMessageListContainer'
import RootComponent from '../../lib/Base/components/RootComponent'

export default class Flash extends RootComponent {
  static propTypes = {
  }

  render() {
    return (
      <Provider store={store}>
        <FlashMessageListContainer />
      </Provider>
    )
  }
}
