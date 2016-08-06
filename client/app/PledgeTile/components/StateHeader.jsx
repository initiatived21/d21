import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import ChildComponent from '../../lib/Base/components/ChildComponent'

export default class StateHeader extends ChildComponent {
  static propTypes = {
    state: PropTypes.string.isRequired,
  }

  render() {
    const { state } = this.props

    let awesomeName, className
    switch(state) {
    case 'initialized':
      awesomeName = 'file-text-o'
      className = 'c-pledge-header--initialized'
      break
    case 'requested':
      awesomeName = 'info-circle'
      className = 'c-pledge-header--requested'
      break
    case 'active':
      awesomeName = 'star'
      className = 'c-pledge-header--active'
      break
    case 'successful':
      awesomeName = 'check'
      className = 'c-pledge-header--successful'
      break
    case 'failed':
      awesomeName = 'times'
      className = 'c-pledge-header--failed'
      break
    case 'disapproved':
      awesomeName = 'thumbs-o-down'
      className = 'c-pledge-header--disapproved'
      break
    default:
      awesomeName = 'question'
    }

    return (
      <div className={`c-pledge-header ${className}`}>
        <FontAwesome name={awesomeName} />
        {' '}
        {this.t(`.${state}`)}
      </div>
    )
  }
}
