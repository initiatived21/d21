import { connect } from 'react-redux'
import { updateAction, getName } from 'rform'
import moment from 'moment'
import I18n from 'i18n-js'
import DateInputComponent from '../components/DateInputComponent'

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
    maxDate: moment().add(5, 'months'),
    dateFormat: I18n.t('rform.date_format'),
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
    dispatchProps.dispatch(
      updateAction(
        ownProps.formId, ownProps.attribute, ownProps.submodel, date.toString()
      )
    )
  },
})

const connected = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(DateInputComponent)

export default connected
