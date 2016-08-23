import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent.js'

export default class ProgressBar extends ChildComponent {
  static propTypes = {
    percentage: PropTypes.number.isRequired,
    urgent: PropTypes.bool
  };

  render() {
    const { percentage, urgent } = this.props
    const className = `c-progress-bar${urgent ? ' c-progress-bar--urgent' : ''}`

    return (
      <div className={className} aria-hidden="true">
        <div className="c-progress-bar__liquid" style={{ width: `${percentage}%` }}>
        </div>
      </div>
    )
  }
}
