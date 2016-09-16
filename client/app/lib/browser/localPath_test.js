import localPath from './localPath'
import I18n from 'i18n-js'

describe('localPath', function() {
  it('should prefix a path with the current locale', function() {
    I18n.locale = 'ru'

    const path = '/pledges/new'
    localPath(path).should.equal('/ru/pledges/new')
  })

  it('should work even if the leading slash is absent', function() {
    I18n.locale = 'fr'

    const path = 'pledges/new'
    localPath(path).should.equal('/fr/pledges/new')
  })
})
