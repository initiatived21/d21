import I18n from 'i18n-js'

function formatDateAndTime(date) {
  let formatString

  switch(I18n.locale) {
  case 'en':
    formatString = '%d/%m/%Y at %-I:%M %p'
    break
  case 'de':
  default:
    formatString = '%d.%m.%Y um %-H:%M Uhr'
    break
  }

  return I18n.strftime(new Date(Date.parse(date)), formatString)
}

export default formatDateAndTime
