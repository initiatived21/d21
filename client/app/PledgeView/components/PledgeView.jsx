import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../../lib/store'
import RootComponent from '../../lib/Base/components/RootComponent'
import Pledge from './Pledge'
import PledgeSidebarContainer from '../../Sidebar/containers/PledgeSidebarContainer'
import PledgeUpdatesContainer from '../../UpdateList/containers/PledgeUpdatesContainer'
import PledgeQAsContainer from '../../CommentList/containers/PledgeQAsContainer'
import SigneeListContainer from '../../SigneeList/containers/SigneeListContainer'

export default class PledgeView extends RootComponent {
  static propTypes = {
    pledge: PropTypes.object.isRequired,
    forms: PropTypes.shape({
      signPledgeForm: PropTypes.object.isRequired,
      updateForm: PropTypes.object.isRequired,
      questionForm: PropTypes.object.isRequired,
      answerForm: PropTypes.object.isRequired,
    }).isRequired,
    user: PropTypes.object.isRequired,
    signatures: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    updates: PropTypes.array.isRequired,
  }

  get objectsToForwardToState() {
    return ['pledge', 'user', 'signatures', 'comments', 'updates']
  }

  render() {
    const { pledge, user, forms } = this.props

    return (
      <Provider store={store}>
        <main>
          <div className="o-wrapper u-mb-large">
            <div className="o-sidebar__container">
              <Pledge {...pledge} user={user} />
              <PledgeSidebarContainer pledge_id={pledge.id}
                forms={forms} />
              <PledgeUpdatesContainer pledge_id={pledge.id} />
              <PledgeQAsContainer pledge_id={pledge.id}
                forms={forms} />
              <SigneeListContainer pledge_id={pledge.id} user={user} />
            </div>
          </div>
        </main>
      </Provider>
    )
  }
}
