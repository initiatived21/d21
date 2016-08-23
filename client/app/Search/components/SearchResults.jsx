import React, { PropTypes } from 'react'
import ChildComponent from '../../lib/Base/components/ChildComponent'
import PledgeTile from '../../PledgeTile/components/PledgeTile'

export default class SearchResults extends ChildComponent {
  static propTypes = {
    results: PropTypes.arrayOf(
      PropTypes.object
    ).isRequired
  }

  render() {
    return (
      <ul className="o-layout">
        {this.props.results.map( result =>
          <PledgeTile key={result.id} pledge={result} />
        )}
      </ul>
    )
  }
}
