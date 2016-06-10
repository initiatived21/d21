import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from '../../lib/store'
import RootComponent from '../../lib/Base/components/RootComponent';
import Pledge from './Pledge';
import PledgeAdditionalForms from './PledgeAdditionalForms';
import PledgeUpdates from './PledgeUpdates';
import PledgeQAs from './PledgeQAs';
import SigneeList from './SigneeList';

export default class PledgeView extends RootComponent {
  static propTypes = {
    pledge: PropTypes.object.isRequired,
    signPledgeForm: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Provider store={store}>
        <main>
          <div className="o-wrapper">
            <div className="o-layout">
              <Pledge {...this.props.pledge} />
              <PledgeAdditionalForms
                id={this.props.pledge.id}
                signPledgeForm={this.props.signPledgeForm}
              />
              <PledgeUpdates />
              <PledgeQAs />
              <SigneeList />
            </div>
          </div>
        </main>
      </Provider>
    );
  }
};
