import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';

export default class ReportPledgeForm extends ChildComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
  };

  render() {
    const { id } = this.props;

    return (
      <aside className="c-report-pledge">
        <p>{this.t('.description')}</p>

        <a className="o-btn o-btn--small o-btn--full" href="">{this.t('.report_pledge')}</a>
      </aside>
    );
  }
};
