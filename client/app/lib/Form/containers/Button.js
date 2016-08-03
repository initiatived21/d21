import { connect } from 'react-redux'
import updateAction from '../actions/updateAction'
import ButtonComponent from '../components/ButtonComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    combinedClassName: `button ${ownProps.className}`,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick(_e) {
    const formObjectName = ownProps.object.constructor.name

    return dispatch(
      updateAction(formObjectName, 'commit', null, ownProps.commit)
    )
  }
})

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonComponent)
connected.isButton = true

export default connected
