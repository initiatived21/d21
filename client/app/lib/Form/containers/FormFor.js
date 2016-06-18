import { connect } from 'react-redux'
import BaseForm from '../components/BaseForm'

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = dispatch =>
  ({
    onBlur(field) {
      return dispatch(validationAction(field))
    }
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseForm)
