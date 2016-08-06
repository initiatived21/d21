import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from '../../lib/store'
import RootComponent from '../../lib/Base/components/RootComponent';
import ActivePledgeForm from '../containers/ActivePledgeForm';
import PledgeFormHelp from './PledgeFormHelp'

export default class NewPledge extends RootComponent {
  static propTypes = {
    formData: PropTypes.object.isRequired,
    tags: PropTypes.array.isRequired,
  };

  render() {
    return (
      <Provider store={store}>
        <div className="o-wrapper">
          <div className="o-layout">
            <div className="o-layout__item u-1/2@m u-2/3@l">
              <ActivePledgeForm
                formData={this.props.formData}
                tags={this.props.tags} />
            </div>
            <div className="o-layout__item u-1/2@m u-1/3@l">
              <PledgeFormHelp />
            </div>
          </div>
        </div>
      </Provider>
    )
  }
};
