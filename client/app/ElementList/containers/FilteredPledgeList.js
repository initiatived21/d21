import { connect } from 'react-redux';
import { values } from 'lodash';
import PledgeList from '../components/PledgeList';

function filterPledges(pledges, filter) {
  const pledgeList = values(pledges);

  if (typeof filter === 'undefined') {
    return pledgeList;
  }

  return pledgeList.filter( (pledge) => {
    return (pledge.aasm_state === filter);
  });
}

export function mapStateToProps(state, ownProps) {
  return ({
    pledges: filterPledges(state.pledges, ownProps.filter)
  });
}

export function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PledgeList);
