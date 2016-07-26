import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent'

export default class StateHeader extends ChildComponent {
  static propTypes = {
    state: PropTypes.string.isRequired,
  }

  render() {
    const { state } = this.props

    return (
      <div className="c-pledge-tile__state-header">
        {this.t(`.${state}`)}
      </div>
    )
  }
}
