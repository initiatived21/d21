import { connect } from 'react-redux'
import { setEntity } from '../../lib/actions/entityActions'
import UpdateForm from '../components/UpdateForm'

const mapStateToProps = (state) => {
  return {
    isSubmitting: state.isSubmitting.NewUpdateFormObject,
    wasSubmitted: state.ui.updateSubmitted,
  }
}

const mapDispatchToProps = dispatch => ({
  afterResponse: json => {
    if (json.status =='success') {
      dispatch(setEntity('updateSubmitted', true, 'ui'))
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateForm)
