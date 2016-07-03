import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';
import SearchResults from './SearchResults';
import GetMoreResultsButton from './GetMoreResultsButton';

export default class PaginatedSearchResults extends ChildComponent {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  static propTypes = {
    results: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const { results, query, resultCount, onButtonClick } = this.props;

    const showMoreButton = resultCount > results.length;

    return (
      <div>
        <p>Suchbegriff: {query}</p>
        <p>Treffer: {results.length} von {resultCount}</p>
        <SearchResults results={results} />
        { showMoreButton ?
          <GetMoreResultsButton disabled={this.state.loading} numResults={results.length} clickHandler={onButtonClick} >
            Mehr anzeigen…
          </GetMoreResultsButton>
          : null }
      </div>
    )
  }
}
