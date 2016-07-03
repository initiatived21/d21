import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';

import ElementList from '../../ElementList/components/ElementList'

export default class EmptyResults extends ChildComponent {
  static propTypes = {
    pledges: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        <section>
          <div>
            <h2>
              Von der Redaktion empfohlen
            </h2>
            <p>TODO: Needs recommendation feature </p>
          </div>
        </section>

        <section>
          <div>
            <h2>
              Beliebteste Versprechen
            </h2>
            <p>TODO: Needs popularity scope</p>
          </div>
        </section>

        <section>
          <div>
            <h2>
               Neueste Versprechen
            </h2>
            <ElementList pledges={this.props.pledges} filter='active' />
          </div>
        </section>
      </div>
    )
  }
}
