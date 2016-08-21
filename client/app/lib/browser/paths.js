/**
 *  Returns i18n paths
 */

import I18n from 'i18n-js'

export function termsPath() {
  switch(I18n.locale) {
  case 'en':
    return '/en/terms'
  case 'de':
  default:
    return '/de/terms'
  }
}

export function privacyPath() {
  switch(I18n.locale) {
  case 'en':
    return '/en/privacy'
  case 'de':
  default:
    return '/de/privacy'
  }
}

export function faqPath() {
  switch(I18n.locale) {
  case 'en':
    return '/en/faq'
  case 'de':
  default:
    return '/de/faq'
  }
}
