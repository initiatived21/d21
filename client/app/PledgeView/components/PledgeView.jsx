import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../../lib/store'
import RootComponent from '../../lib/Base/components/RootComponent'
import Pledge from './Pledge'
import PledgeAdditionalForms from './PledgeAdditionalForms'
import PledgeUpdatesContainer from '../containers/PledgeUpdatesContainer'
import PledgeQAsContainer from '../containers/PledgeQAsContainer'
import SigneeListContainer from '../containers/SigneeListContainer'

export default class PledgeView extends RootComponent {
  static propTypes = {
    pledge: PropTypes.object.isRequired,
    signPledgeForm: PropTypes.object.isRequired,
    commentForms: PropTypes.object.isRequired,
    signatures: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    updates: PropTypes.array.isRequired,
  }

  get objectsToForwardToState() {
    return ['pledge', 'signatures', 'comments', 'updates']
  }

  render() {
    return (
      <Provider store={store}>
        <main>
          <div className="o-wrapper">
            <div className="o-layout">
              <Pledge {...this.props.pledge} />
              <PledgeAdditionalForms id={this.props.pledge.id}
                signPledgeForm={this.props.signPledgeForm} />
              <PledgeUpdatesContainer pledge_id={this.props.pledge.id} />
              <PledgeQAsContainer pledge_id={this.props.pledge.id}
                formData={this.props.commentForms} />
              <SigneeListContainer pledge_id={this.props.pledge.id} />
            </div>
          </div>
        </main>
      </Provider>
    )
  }
}
