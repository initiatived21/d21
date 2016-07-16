import { connect } from 'react-redux'
import UpdateForm from '../components/UpdateForm'

const mapStateToProps = (state, ownProps) => {
  return {
    isSubmitting: state.isSubmitting.NewUpdateFormObject
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateForm)
