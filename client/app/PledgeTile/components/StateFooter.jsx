import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent'
import { FormButton }       from 'rform'

export default class StateFooter extends ChildComponent {
  static propTypes = {
    pledge: PropTypes.object.isRequired,
    action: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
  }

  render() {
    const { action, href, method } = this.props

    return (
      <div className="c-pledge-tile__state-footer">
        <FormButton
          className="o-btn o-btn--small c-btn c-btn--primary u-mt-small"
          action={href}
          method={method}>
          {this.t(`.${action}`)}
        </FormButton>
      </div>
    )
  }
}
