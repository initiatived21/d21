import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';
import SearchResults from './SearchResults';

export default class PaginatedSearchResults extends ChildComponent {
  static propTypes = {
    results: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  onButtonClick() {
    // What to do here?

  }

  render() {
    const { results } = this.props;

    return (
      <div>
        <SearchResults results={results} />
        <button className="o-btn o-btn--small" type="submit" onClick={this.onButtonClick} >
          Mehr anzeigen…
        </button>
      </div>
    )
  }
}
