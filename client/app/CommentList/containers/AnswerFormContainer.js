import { connect } from 'react-redux'
import merge from 'lodash/merge'
import clone from 'lodash/clone'
import AnswerForm from '../components/AnswerForm'

const mapStateToProps = (state, ownProps) => {
  // We receive the put action with a placeholder, insert the ID there
  const formData = merge(clone(ownProps.formData), {
    action: ownProps.formData.action.replace(':id', ownProps.id)
  })

  return {
    formData,
    isSubmitting: state.isSubmitting.NewAnswerFormObject
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerForm)
