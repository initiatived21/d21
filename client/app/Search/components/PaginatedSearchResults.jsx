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
    this.setState({ loading: true });

    // Ajax request
    request
      .get('/de/pledges')
      .query({ query: this.props.query, range: '2..2' })
      .set('Accept', 'application/json')
      .end(function(err, res) {
        this.setState({ loading: false });

        if (!err) {
          const pledges = res.body.pledges;
          console.log(pledges.length);
          console.log(pledges);
        }

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
