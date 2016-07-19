import React, { PropTypes } from 'react'
import ChildComponent from '../../Base/components/ChildComponent'

export default class BaseForm extends ChildComponent {
  static propTypes = {
    action: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    authToken: PropTypes.string.isRequired,
  }

  render() {
    const { action, method, authToken, children } = this.props

    return(
      <form action={action} method='POST'>
        <input type='hidden' name='authenticity_token' value={authToken} />
        <input type='hidden' name='_method' value={method} />
        <button type='submit'>{children}</button>
      </form>
    )
  }
}