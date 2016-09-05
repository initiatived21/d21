import moment from 'moment'
import sinon from 'sinon'
import momentToString from './momentToString'

describe('momentToString', function() {
  it('should render the string correctly', function() {
    const date = moment('2015-02-15')

    momentToString(date).should.equal('2015-02-15')
  })
})
