import redirectTo from './redirectTo'

describe('redirectTo', function() {
  const url = 'http://www.example.com'

  it('should set window.location if window is present', function() {
    window = {}

    redirectTo(url)

    window.should.eql({ location: 'http://www.example.com' })
  })

  it('should throw an error if window is not present', function() {
    window = undefined

    const fn = () => redirectTo(url)

    fn.should.throw('Redirection not possible in server environment')
  })
})
