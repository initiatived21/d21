// RootComponent to be used for containers directly rendered in a rails view.
//
// This corrects the set locale, mostly for server side rendering.
import React from 'react';
import I18n from 'i18n-js';

export default class RootComponent extends React.Component {
  constructor(props) {
    I18n.locale = props.locale;

    // We need this for CSS (e.g. quotes) to work properly; needs testing?
    document.documentElement.lang = props.locale;

    return super(props);
  }
};
