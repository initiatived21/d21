import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from '../../lib/store'
import RootComponent from '../../lib/Base/components/RootComponent';
import ActivePledgeForm from '../containers/ActivePledgeForm';
import NewPledgeFormObject from '../../lib/form_objects/new_pledge_form';

export default class NewPledge extends RootComponent {
  static propTypes = {
    formData: PropTypes.object.isRequired,
    tags: PropTypes.array.isRequired,
  };

  render() {
    return (
      <Provider store={store}>
        <ActivePledgeForm
          formObject={NewPledgeFormObject}
          formData={this.props.formData}
          tags={this.props.tags} />
      </Provider>
    )
  }
};
