import { connect } from 'react-redux';
import FilteredList from '../components/FilteredList';

function mapStateToProps(state) {
  return ({
    pledges: state.pledges || {}
  });
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredList)
