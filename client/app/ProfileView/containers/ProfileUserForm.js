import { connect } from 'react-redux'
import ProfileUserForm from '../components/ProfileUserForm'
import sendUserFormAction from '../actions/sendUserFormAction'
import { setEntity } from '../../lib/actions/entityActions'

const mapStateToProps = (state) => {
  return {
    userFormSent: state.userFormSent
  }
}

const mapDispatchToProps = (dispatch) => ({
  afterResponse: function(response) {
    if (response.status === 'success') {
      dispatch(sendUserFormAction())

      const user = response.changes.current_user
      dispatch(setEntity(user.id, user, 'users'))
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileUserForm)
