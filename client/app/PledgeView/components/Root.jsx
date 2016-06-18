import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import PledgeViewContainer from '../containers/PledgeViewContainer'

export default class Root extends RootComponent {
  static propTypes = {
    pledge: PropTypes.object.isRequired,
    signPledgeForm: PropTypes.object.isRequired,
    signatures: PropTypes.array.isRequired,
    updates: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
  }

  render() {
    console.log('Root props', this.props)
    return (
      <Provider store={store}>
        <PledgeViewContainer {this.props...} />
      </Provider>
    )
  }
}
