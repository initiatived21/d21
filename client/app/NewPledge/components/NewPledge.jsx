import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../../lib/store'
import RootComponent from '../../lib/Base/components/RootComponent'
import ActivePledgeForm from '../containers/ActivePledgeForm'

export default class NewPledge extends RootComponent {
  static propTypes = {
    form: PropTypes.object.isRequired,
    tags: PropTypes.array.isRequired,
  };

  render() {
    return (
      <Provider store={store}>
        <div className="o-wrapper">
          <div className="o-sidebar__container">
            <div className="u-2/3@l u-pr-small@l">
              <ActivePledgeForm
                form={this.props.form}
                tags={this.props.tags} />
            </div>

          </div>
        </div>
      </Provider>
    )
  }
}
