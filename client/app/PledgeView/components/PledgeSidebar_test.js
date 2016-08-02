import React       from 'react'
import { shallow } from 'enzyme'

import PledgeSidebar from './PledgeSidebar'
import SignPledgeFormContainer from '../containers/SignPledgeFormContainer'
import ReportPledgeForm from './ReportPledgeForm'

describe('<PledgeSidebar />', function () {
  const props = {
    pledge_id: 1,

    forms: {
      signPledgeForm: {
        action: '/',
        authToken: 'a',
        model: 'signature'
      },
      updateForm: {
        action: '/',
        authToken: 'a',
        model: 'update'
      }
    },
    isPreview: false,
    isDraft: false,
    activateAction: '/',
    userIsInitiator: false,
    userConfirmed: false,
    renderReportForm: true
  }

  it('should render', function () {
    const wrapper = shallow(<PledgeSidebar {...props} />)

    wrapper.find(SignPledgeFormContainer).length.should.equal(1)
    wrapper.find(ReportPledgeForm).length.should.equal(1)
  })
})
