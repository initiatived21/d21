import I18n from 'i18n-js';
import RootComponent from './RootComponent.js';

describe('RootComponent', function() {
  it('should set the global locale to the given locale', function() {
    I18n.locale = 'foo';

    new RootComponent({locale: 'bar'});

    I18n.locale.should.equal('bar');
  });
});
