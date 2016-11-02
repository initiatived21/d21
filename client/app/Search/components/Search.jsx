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
    filter: PropTypes.string.isRequired,
    resultCount: PropTypes.number.isRequired,
    resultIds: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  get objectsToForwardToState() {
    return ['pledges']
  }

  componentWillMount() {
    super.componentWillMount()
    store.dispatch(addSearchResults(this.props.resultIds))
  }

  render() {
    const { query, filter, resultCount, resultIds } = this.props

    return (
      <Provider store={store}>
        <div className="o-wrapper">
          <PaginatedSearchResultsContainer
            resultCount={resultCount}
            resultIds={resultIds}
            query={query}
            filter={filter}
          />
        </div>
      </Provider>
    )
  }
}
