import formatDate from './formatDate'
import I18n from 'i18n-js'

describe('formatDate', function() {
  const date = '2016-09-03'

  it('formats date for German locale', function() {
    I18n.locale = 'de'

    formatDate(date).should.equal('03.09.2016')
  })

  it('formats date for English locale', function() {
    I18n.locale = 'en'

    formatDate(date).should.equal('03/09/2016')
  })
})
