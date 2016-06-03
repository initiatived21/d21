import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';

import SignPledgeForm from './SignPledgeForm';
import ReportPledgeForm from './ReportPledgeForm';

export default class PledgeAdditionalForms extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
  };

  render() {
    const { id } = this.props;

    return (
      <div className="o-layout__item u-1/4@l">
        <SignPledgeForm id={id} />
        <ReportPledgeForm id={id} />
      </div>
    );
  }
};
