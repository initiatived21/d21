import { connect } from 'react-redux';
import merge from 'lodash/merge'
import SearchResults from '../components/SearchResults';

const mapStateToProps = function(state, ownProps) {
  let results = []
  for (const resultId of ownProps.resultIds) {
    results.push(state.pledges[resultId])
  }

  return {
    results
  }
}

const mapDispatchToProps = dispatch => {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
