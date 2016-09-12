import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../../lib/store'
import RootComponent from '../../lib/Base/components/RootComponent'
import PaginatedSearchResultsContainer from '../containers/PaginatedSearchResultsContainer'
import { addSearchResults } from '../actions/searchActions'

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

  constructor(props) {
    super(props)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  get objectsToForwardToState() {
    return ['pledges']
  }

  componentDidMount() {
    store.dispatch(addSearchResults(this.props.resultIds))
  }

  render() {
    const { pledges, query, resultCount, resultIds } = this.props

    return (
      <Provider store={store}>
        <div className="o-wrapper">
          <PaginatedSearchResultsContainer
            total={resultCount}
            resultIds={resultIds}
            query={query}
          />
        </div>
      </Provider>
    )
  }
}
