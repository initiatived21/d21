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
            <h2>
              Entdecke interessante Versprechen
            </h2>
            <p>
              Suche nach Schlagwörtern, Orten, Unternehmen oder Organisationen
            </p>

            <form method="get" action={`/${locale}/pledges`}>
              <input type="search" name="query" placeholder="Schlagwort, Ort, Unternehmen/Organisation" />
              <button className="o-btn o-btn--pill o-btn--small" type="submit">
                Suchen
              </button>
            </form>

            {resultView}

          </div>
        </section>
      </Provider>
    )
  }
}