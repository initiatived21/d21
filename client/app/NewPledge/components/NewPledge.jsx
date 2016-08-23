import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import MediaQuery from 'react-responsive'
import store from '../../lib/store'
import RootComponent from '../../lib/Base/components/RootComponent'
import ActivePledgeForm from '../containers/ActivePledgeForm'
import PledgeFormHelp from './PledgeFormHelp'

export default class NewPledge extends RootComponent {
  static propTypes = {
    form: PropTypes.object.isRequired,
    tags: PropTypes.array.isRequired,
  };

  render() {
    return (
      <Provider store={store}>
        <div className="o-wrapper">
          <div className="o-layout">
            <div className="o-layout__item u-2/3@l">
              <ActivePledgeForm
                form={this.props.form}
                tags={this.props.tags} />
            </div>
            <div className="o-layout__item u-1/3@l">
              <MediaQuery maxWidth={991}>
                <PledgeFormHelp controls />
              </MediaQuery>
              <MediaQuery minWidth={992}>
                <PledgeFormHelp />
              </MediaQuery>
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}
