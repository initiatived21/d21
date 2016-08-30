import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../../lib/store'

import RootComponent from '../../lib/Base/components/RootComponent'
import EmptyResults from './EmptyResults'
import PaginatedSearchResultsContainer from '../containers/PaginatedSearchResultsContainer'

export default class Search extends RootComponent {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    pledges: PropTypes.arrayOf(
      PropTypes.object
    ).isRequired,
    query: PropTypes.string.isRequired,
    resultCount: PropTypes.number.isRequired,
    resultIds: PropTypes.array.isRequired
  }

  get objectsToForwardToState() {
    return ['pledges']
  }

  render() {
    const { pledges, query, resultCount, resultIds } = this.props

    let resultView
    if (query === '') {
      resultView = <EmptyResults pledges={pledges} />
    } else {
      resultView =
        <PaginatedSearchResultsContainer total={resultCount} resultIds={resultIds} query={query} />
    }

    return (
      <Provider store={store}>
        <section>
          <div className="o-wrapper u-mb">
            {resultView}
          </div>
        </section>
      </Provider>
    )
  }
}
