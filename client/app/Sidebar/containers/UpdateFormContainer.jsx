import { connect } from 'react-redux'
import UpdateForm from '../components/UpdateForm'

const mapStateToProps = (state) => {
  return {
    isSubmitting: state.isSubmitting.NewUpdateFormObject
  }
}

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateForm)
