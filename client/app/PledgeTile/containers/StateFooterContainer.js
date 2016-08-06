import { connect } from 'react-redux'
import values      from 'lodash/values'
import I18n        from 'i18n-js'
import StateFooter from '../components/StateFooter'

const mapStateToProps = (state, ownProps) => {
  const pledge = ownProps.pledge
  const aasm_state = pledge.aasm_state

  const stateActions = {
    initialized: 'edit',
    requested: 'delete',
    active: 'delete',
    successful: 'contact',
    failed: 'republish',
    disapproved: 'delete'
  }

  const actionData = {
    edit: {
      method: 'GET',
      href: `/${I18n.locale}/pledges/${pledge.id}/edit`,
    },
    delete: {
      method: 'DELETE',
      href: `/${I18n.locale}/pledges/${pledge.id}`,
    },
    contact: {
      method: 'GET',
      href: `/${I18n.locale}/pledge/contact`,
    },
    republish: {
      method: 'GET',
      href: `/${I18n.locale}/pledge/republish`,
    },
  }

  const action = stateActions[aasm_state]

  return {
    action,
    href: actionData[action].href,
    method: actionData[action].method,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StateFooter)
