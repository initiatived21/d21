import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import SearchResults from './SearchResults'
import GetMoreResultsButton from './GetMoreResultsButton'

export default class PaginatedSearchResults extends ChildComponent {
  static propTypes = {
    results: PropTypes.arrayOf(PropTypes.object).isRequired,
    query: PropTypes.string.isRequired,
    resultCount: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onButtonClick: PropTypes.func.isRequired
  }

  render() {
    const { results, query, resultCount, isLoading, onButtonClick } = this.props

    const showMoreButton = resultCount > results.length

    return (
      <div>
        <p>Suchbegriff: {query}</p>
        <p>Treffer: {results.length} von {resultCount}</p>
        <SearchResults results={results} />
        { showMoreButton ?
          <GetMoreResultsButton disabled={isLoading} numResults={results.length} clickHandler={onButtonClick} >
            {this.t('.show_more')}
          </GetMoreResultsButton>
          : null }
      </div>
    )
  }
}
