import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';
import SearchResults from './SearchResults';
import GetMoreResultsButton from './GetMoreResultsButton';
import request from 'superagent';

export default class PaginatedSearchResults extends ChildComponent {
  constructor(props) {
    super(props);
    this.state = { loading: false };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  static propTypes = {
    results: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  onButtonClick() {
    // What to do here?
    this.setState({ loading: true });

    request
      .get('/de/index')
      .query({ query: 'Manny', range: '1..5', order: 'desc' })
      .set('Accept', 'application/json')
      .end(function(err, res) {
        console.log(err, res);
        this.setState({ loading: false });
      }.bind(this));
  }

  render() {
    const { results, resultCount } = this.props;

    const showMoreButton = resultCount > results.length;

    return (
      <div>
        <SearchResults results={results} />
        { showMoreButton ?
          <GetMoreResultsButton disabled={this.state.loading} clickHandler={this.onButtonClick} >
            Mehr anzeigen…
          </GetMoreResultsButton>
          : null }
      </div>
    )
  }
}
