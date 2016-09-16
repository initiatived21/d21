import React from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'

export default class UpdateSentMessage extends ChildComponent {
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
        </div>
      </div>
    )
  }
}
