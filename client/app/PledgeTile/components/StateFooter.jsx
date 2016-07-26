import React, { PropTypes } from 'react'
import ChildComponent       from '../../lib/Base/components/ChildComponent'

export default class StateFooter extends ChildComponent {
  static propTypes = {
    pledge: PropTypes.object.isRequired,
  }

  render() {
    const { pledge } = this.props
    const state = pledge.aasm_state

    const stateActions = {
      initialized: 'edit',
      requested: 'delete',
      active: 'delete',
      successful: 'contact',
      failed: 'republish',
    }

    const actionHrefs = {
      edit: `/${I18n.locale}/pledges/${pledge.id}/edit`,
      delete: '/todo',
      contact: '/todo',
      republish: '/todo',
    }

    const action = stateActions[state]

    return (
      <div className="c-pledge-tile__state-footer">
        <a href={actionHrefs[action]}>
          {this.t(`.${action}`)}
        </a>
      </div>
    )
  }
}
