import I18n from 'i18n-js'

function formatDate(date) {
  let formatString

  switch(I18n.locale) {
  case 'en':
    formatString = '%d/%m/%Y'
    break
  case 'de':
  default:
    formatString = '%d.%m.%Y'
    break
  }

  return I18n.strftime(new Date(Date.parse(date)), formatString)
}

export default formatDate
