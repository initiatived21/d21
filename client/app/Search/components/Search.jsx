import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from '../../lib/store'

import ChildComponent from '../../lib/Base/components/ChildComponent';
import EmptyResults from './EmptyResults'
import SearchResults from './SearchResults'

export default class Search extends ChildComponent {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    elements: PropTypes.arrayOf(
      PropTypes.object
    ).isRequired,
  };

  render() {
    const { locale, elements } = this.props

    let resultView = undefined
    if (elements.length == 0) {
      resultView = <EmptyResults pledges={elements} />
    } else {
      resultView = <SearchResults results={elements} />
    }

    return (
      <Provider store={store}>
        <section>
          <div className='o-wrapper'>
            {resultView}
          </div>
        </section>
      </Provider>
    )
  }
}
