import { connect } from 'react-redux'
import { updateAction, getName } from 'rform'
import moment from 'moment'
import I18n from 'i18n-js'
import DateInputComponent from '../components/DateInputComponent'
import momentToString from '../../lib/date_and_time/momentToString'

const mapStateToProps = function(state, ownProps) {

  const attrs = state[ownProps.formId]
  let value = ''
  if (attrs && ownProps.submodel && attrs[ownProps.submodel]) {
    value = attrs[ownProps.submodel][ownProps.attribute] || ''
  } else if (attrs) {
    value = attrs[ownProps.attribute] || ''
  }

  const name = getName(ownProps.model, ownProps.submodel, ownProps.attribute)

  return {
    name,
    locale: I18n.locale,
    selected: value ? moment(value) : undefined,
    minDate: moment(),
    maxDate: moment().add(3, 'years'),
    dateFormat: I18n.t('rform.date_format'),
    formState: attrs,
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,

  onChange(date) {
    console.log(date.toString())

    dispatchProps.dispatch(
      updateAction(
        ownProps.formId, ownProps.attribute, ownProps.submodel,
        momentToString(date)
      )
    )
  },

  onBlur(_event) {
    const { attribute, formObjectClass, submodel, formId } = ownProps
    const { formState } = stateProps

    const formObject = new formObjectClass(stateProps.formState)
    formObject.validate(attribute)
    const errorKey = formObject.errorKey(attribute, submodel)
    const errors = formObject.attributes.errors[errorKey]

    if (!errors && (!formState.errors || !formState.errors[errorKey])) return
    dispatchProps.dispatch(updateAction(formId, errorKey, 'errors', errors))
  }

})

const connected = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(DateInputComponent)

export default connected
