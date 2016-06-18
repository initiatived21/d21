import { connect } from 'react-redux'

import NewSignatureFormObject from '../../lib/form_objects/new_signature_form'
import PledgeAdditionalForms from '../components/PledgeAdditionalForms'

const mapStateToProps = (state, ownProps) => {
  const signature = state['NewSignatureFormObject']

  return {
    editedSignature: signature,
    signPledgeFormObject: new NewSignatureFormObject(signature),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeAdditionalForms)
