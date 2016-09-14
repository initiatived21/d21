import daysTill from './daysTill'
import sinon from 'sinon'

describe('daysTill', function() {
  const fakeNow = 1470487029361  // Millis for 2016-08-06T12:37:09.361Z

  it('should display the remaining days if date is in the future', function() {
    const clock = sinon.useFakeTimers(fakeNow)

    daysTill('2016-08-16').should.equal(10)

    clock.restore()
  })

  it('should display zero days if date is in the past', function() {
    const clock = sinon.useFakeTimers(fakeNow)

    daysTill('2016-08-01').should.equal(0)

    clock.restore()
  })
})
