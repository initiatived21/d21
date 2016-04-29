//= require i18n
//= require i18n/translations
//= require_tree ./react_base
//= require_tree ./new_pledge

// I18n setup
// I18n.missingTranslation = function () { return undefined; }; // Comment for dev

// set globally accessible react classes
global.store = require('react_base/store/store')
global.NewPledge = require('new_pledge/components/NewPledge')
global.ListPledges = require('list_pledges/components/ListPledges')
