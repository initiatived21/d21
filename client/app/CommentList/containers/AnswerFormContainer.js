import { connect } from 'react-redux'
import merge from 'lodash/merge'
import clone from 'lodash/clone'
import AnswerForm from '../components/AnswerForm'
import { addEntities } from '../../lib/actions/entityActions'

const mapStateToProps = (state, ownProps) => {
  // We receive the put action with a placeholder, insert the ID there
  const formData = merge(clone(ownProps.formData), {
    action: ownProps.formData.action.replace(':id', ownProps.id)
  })

  return {
    formData,
    isSubmitting: state.rform.isSubmitting.NewAnswerFormObject === true
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleResponse: (_formId, data) => dispatch(addEntities(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerForm)
