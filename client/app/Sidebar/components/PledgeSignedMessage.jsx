import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'

export default class PledgeSignedMessage extends ChildComponent {
  static propTypes = {
  }

  render() {
    return (
      <div className="c-sidebar c-sidebar--tertiary">
        <h2 className="c-sidebar__title">
          {this.t('.title')}
        </h2>
        <div className="c-sidebar__wrapper">
          <p className="u-mb-small">
            {this.t('.explanation')}
          </p>
          <p>
            {this.t('.email')}
          </p>
        </div>
      </div>
    )
  }
}
