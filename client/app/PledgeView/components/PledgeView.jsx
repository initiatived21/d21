import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../../lib/store'
import RootComponent from '../../lib/Base/components/RootComponent'
import Pledge from './Pledge'
import PledgeAdditionalForms from '../containers/PledgeAdditionalFormsContainer'
import PledgeUpdatesContainer from '../containers/PledgeUpdatesContainer'
import PledgeQAsContainer from '../containers/PledgeQAsContainer'
import SigneeListContainer from '../containers/SigneeListContainer'

export default class PledgeView extends RootComponent {
  static propTypes = {
    pledge: PropTypes.object.isRequired,
    signPledgeForm: PropTypes.object.isRequired,
  }

  get objectsToForwardToState() {
    return ['pledge', 'signatures', 'comments', 'updates']
  }

  render() {
    console.log('PledgeView props', this.props)
    return (
      <Provider store={store}>
        <main>
          <div className="o-wrapper">
            <div className="o-layout">
              <Pledge {...this.props.pledge} />
              <PledgeAdditionalForms id={this.props.pledge.id}
                signPledgeForm={this.props.signPledgeForm} />
              <PledgeUpdatesContainer pledge_id={this.props.pledge.id} />
              <PledgeQAsContainer pledge_id={this.props.pledge.id} />
              <SigneeListContainer pledge_id={this.props.pledge.id} />
            </div>
          </div>
        </main>
      </Provider>
    )
  }
}
