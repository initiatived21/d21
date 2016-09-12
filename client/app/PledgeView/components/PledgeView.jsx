import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import MediaQuery from 'react-responsive'
import store from '../../lib/store'
import RootComponent from '../../lib/Base/components/RootComponent'
import Pledge from './Pledge'
import PledgeSidebarContainer from '../../Sidebar/containers/PledgeSidebarContainer'
import PledgeUpdateListContainer from '../../UpdateList/containers/PledgeUpdateListContainer'
import PledgeCommentListContainer from '../../CommentList/containers/PledgeCommentListContainer'
import SigneeListContainer from '../../SigneeList/containers/SigneeListContainer'
import { BREAKPOINT_M, BREAKPOINT_L } from '../../lib/config'

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
        <div className="o-wrapper">

          {/* Layout S */}
          <MediaQuery maxWidth={BREAKPOINT_M - 1}>
            <Pledge {...pledge} user={user} />
            <PledgeSidebarContainer pledge_id={pledge.id}
              forms={forms} />
            <PledgeUpdateListContainer pledge_id={pledge.id} />
            <PledgeCommentListContainer pledge_id={pledge.id}
              forms={forms} />
            <SigneeListContainer pledge_id={pledge.id} user={user} />
          </MediaQuery>

          {/* Layout M */}
          <MediaQuery minWidth={BREAKPOINT_M} maxWidth={BREAKPOINT_L - 1}>
            <div className="o-layout">
              <div className="o-layout__item u-5/9">
                <Pledge {...pledge} user={user} />
              </div>
              <div className="o-layout__item u-4/9">
                <PledgeSidebarContainer pledge_id={pledge.id}
                  forms={forms} />
              </div>
            </div>
            <PledgeUpdateListContainer pledge_id={pledge.id} />
            <PledgeCommentListContainer pledge_id={pledge.id}
                forms={forms} />
            <SigneeListContainer pledge_id={pledge.id} user={user} />
          </MediaQuery>

          {/* Layout L */}
          <MediaQuery minWidth={BREAKPOINT_L}>
            <div className="o-layout">
              <div className="o-layout__item u-2/3">
                <Pledge {...pledge} user={user} />
                <PledgeUpdateListContainer pledge_id={pledge.id} />
                <PledgeCommentListContainer pledge_id={pledge.id}
                  forms={forms} />
                <SigneeListContainer pledge_id={pledge.id} user={user} />
              </div>
              <div className="o-layout__item u-1/3">
                <PledgeSidebarContainer pledge_id={pledge.id}
                  forms={forms} />
              </div>
            </div>
          </MediaQuery>

        </div>
      </Provider>
    )
  }
}
