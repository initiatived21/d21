import React, { PropTypes } from 'react';
import ChildComponent from '../../lib/Base/components/ChildComponent';
import SearchResults from './SearchResults';
import GetMoreResultsButton from './GetMoreResultsButton';

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

    setTimeout(function() { this.setState({ loading: false }); }.bind(this), 2000);
  }

  render() {
    const { results } = this.props;

    return (
      <div>
        <SearchResults results={results} />
        <GetMoreResultsButton disabled={this.state.loading} clickHandler={this.onButtonClick} >
          Mehr anzeigen…
        </GetMoreResultsButton>
      </div>
    )
  }
}
