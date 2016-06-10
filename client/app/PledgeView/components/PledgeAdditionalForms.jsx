import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';

import SignPledgeFormContainer from '../containers/SignPledgeFormContainer';
import ReportPledgeForm from './ReportPledgeForm';

export default class PledgeAdditionalForms extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    signPledgeForm: PropTypes.shape({
      formData: PropTypes.object.isRequired,
    }),
  };

  render() {
    const { id, signPledgeForm } = this.props;

    return (
      <div className="o-layout__item u-1/4@l">
        <SignPledgeFormContainer id={id} formData={signPledgeForm.formData} />
        <ReportPledgeForm id={id} />
      </div>
    );
  }
};
