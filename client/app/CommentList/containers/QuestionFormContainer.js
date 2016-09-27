import { connect } from 'react-redux'
import QuestionForm from '../components/QuestionForm'
import { addEntities } from '../../lib/actions/entityActions'

const mapStateToProps = (state) => ({
  isSubmitting: state.rform.isSubmitting.NewAnswerFormObject === true
})

const mapDispatchToProps = (dispatch) => ({
  handleResponse: (_formId, data) => {
    dispatch(addEntities(data))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm)
