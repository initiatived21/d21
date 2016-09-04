import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import MediaQuery from 'react-responsive'

import store from '../../lib/store'
import RootComponent from '../../lib/Base/components/RootComponent'
import ActivePledgeForm from '../containers/ActivePledgeForm'
import PledgeFormHelp from './PledgeFormHelp'
import { BREAKPOINT_L } from '../../lib/config'

export default class NewPledge extends RootComponent {
  static propTypes = {
    form: PropTypes.object.isRequired,
    tags: PropTypes.array.isRequired,
    id: PropTypes.number,
  }

  render() {
    return (
      <Provider store={store}>
        <div className="o-wrapper">
          {/* Layout M */}
          <MediaQuery maxWidth={BREAKPOINT_L - 1}>
            <ActivePledgeForm
              form={this.props.form}
              tags={this.props.tags}
              id={this.props.id}
            />
          </MediaQuery>

          {/* Layout L */}
          <MediaQuery minWidth={BREAKPOINT_L}>
            <div className="o-layout">
              <div className="o-layout__item u-2/3">
                <ActivePledgeForm
                  form={this.props.form}
                  tags={this.props.tags}
                  id={this.props.id}
                />
              </div>
              <div className="o-layout__item u-1/3">
                <PledgeFormHelp />
              </div>
            </div>
          </MediaQuery>
        </div>
      </Provider>
    )
  }
}
