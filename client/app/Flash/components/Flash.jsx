import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../../lib/store'
import FlashMessageListContainer from '../containers/FlashMessageListContainer'
import RootComponent from '../../lib/Base/components/RootComponent'
import { addFlashMessage } from '../actions/flashActions'

export default class Flash extends RootComponent {
  static propTypes = {
    flash: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    // Add server flash messages to state
    const { flash } = this.props

    for (let type in flash) {
      let text = flash[type]
      store.dispatch(addFlashMessage(type, text))
    }
  }

  render() {
    return (
      <Provider store={store}>
        <FlashMessageListContainer />
      </Provider>
    )
  }
}
