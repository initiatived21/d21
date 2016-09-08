import formatDateAndTime from './formatDateAndTime'
import I18n from 'i18n-js'

describe('formatDateAndTime', function() {
  const date = '2016-09-03T21:57:46.341+02:00'

  it('formats date with time for German locale', function() {
    I18n.locale = 'de'

    formatDateAndTime(date).should.equal('03.09.2016 um 21:57 Uhr')
  })

  it('formats date with time for English locale', function() {
    I18n.locale = 'en'

    formatDateAndTime(date).should.equal('03/09/2016 at 9:57 PM')
  })
})
