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

    let resultTitle
    if (resultCount > 0) {
      resultTitle = <h1>{resultCount} Suchergebnisse für <i>{query}</i></h1>
    }
    else {
      resultTitle = <h1>Für <i>{query}</i> gibt es keine Suchergebnisse</h1>
    }

    if (query === '') {
      resultTitle = <h1>Insgesamt {resultCount} Versprechen</h1>
    }

    return (
      <div>
        {resultTitle}
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
