import { connect } from 'react-redux'
import merge from 'lodash/merge'
import AnswerForm from '../components/AnswerForm'

const mapStateToProps = (state, ownProps) => {
  // We receive the put action with a placeholder, insert the ID there
  const formData = merge(ownProps.formData, {
    action: ownProps.formData.action.replace(':id', ownProps.id)
  })

  return {
    formData,
    isSubmitting: state.isSubmitting.NewAnswerFormObject
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerForm)
