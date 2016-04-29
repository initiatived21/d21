//= require i18n
//= require i18n/translations
//= require_tree ./react

// I18n setup
// I18n.missingTranslation = function () { return undefined; }; // Comment for dev

// set globally accessible react classes
global.store = require('./react/lib/store')
global.NewPledge = require('./react/NewPledge/components/NewPledge')
global.ListPledges = require('./react/ListPledges/components/ListPledges')
