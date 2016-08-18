import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'

export default class GetMoreResultsButton extends ChildComponent {
  static propTypes = {
    children: PropTypes.string,
    disabled: PropTypes.bool.isRequired,
    clickHandler: PropTypes.func.isRequired
  }

  render() {
    const { children, disabled, clickHandler, numResults } = this.props

    const buttonProps = {}
    if (disabled) {
      buttonProps['className'] = 'o-btn o-btn--small c-btn--disabled'
      buttonProps['disabled'] = 'disabled'
    }
    else {
      buttonProps['className'] = 'o-btn o-btn--small'
      buttonProps['onClick'] = () => clickHandler(numResults)
    }

    return (
      <button type="submit" {...buttonProps} >
        {children}
      </button>
    )
  }
}
