import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../../lib/store'
import normalize from '../../lib/normalization'
import { addEntities } from '../../lib/actions/entityActions'

import RootComponent from '../../lib/Base/components/RootComponent'
import EmptyResults from './EmptyResults'
import PaginatedSearchResultsContainer from '../containers/PaginatedSearchResultsContainer'

export default class Search extends RootComponent {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    pledges: PropTypes.arrayOf(
      PropTypes.object
    ).isRequired
  }

  get objectsToForwardToState() {
    return ['pledges']
  }

  render() {
    const { locale, pledges, query, resultCount } = this.props

    let resultView = undefined
    if (pledges.length == 0) {
      resultView = <EmptyResults pledges={pledges} />
    } else {
      resultView =
        <PaginatedSearchResultsContainer total={resultCount} query={query} />
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
