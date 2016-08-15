import sinon from 'sinon'
import openWindow from './openWindow'

describe('openWindow', function() {
  const url = 'http://www.example.com'

  it('should call window.open if window is present', function() {
    window.open = sinon.spy()

    openWindow(url)

    window.open.calledOnce.should.be.true
  })

  it('should throw an error if window is not present', function() {
    window = undefined

    const fn = () => openWindow(url)

    fn.should.throw('Opening windows not possible in server environment')
  })
})
