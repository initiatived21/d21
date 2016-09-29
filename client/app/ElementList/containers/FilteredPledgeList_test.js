import { mapStateToProps, mapDispatchToProps } from './FilteredPledgeList'

describe('FilteredPledgeList', function() {
  describe('mapStateToProps', function() {
    const state = {
      pledges: {
        1: {
          id: 1,
          aasm_state: 'successful',
          initiator: 3
        },
        5: {
          id: 5,
          aasm_state: 'active',
          initiator: 3
        },
        7: {
          id: 7,
          aasm_state: 'active',
          initiator: 2
        }
      },
      users: {
        2: {
          id: 2,
          name: 'Carl'
        },
        3: {
          id: 3,
          name: 'Max'
        }
      }
    }

    it('sets all pledges if no filter is given', function() {
      mapStateToProps(state, {}).should.deep.equal({
        pledges: [
          {
            id: 1,
            aasm_state: 'successful',
            initiator: {
              id: 3,
              name: 'Max'
            }
          },
          {
            id: 5,
            aasm_state: 'active',
            initiator: {
              id: 3,
              name: 'Max'
            }
          },
          {
            id: 7,
            aasm_state: 'active',
            initiator: {
              id: 2,
              name: 'Carl'
            }
          }
        ]
      })
    })

    it('sets successful pledges if successful filter is given', function() {
      mapStateToProps(state, { filter: 'successful' }).should.deep.equal({
        pledges: [
          {
            id: 1,
            aasm_state: 'successful',
            initiator: {
              id: 3,
              name: 'Max'
            }
          }
        ]
      })
    })

    it('sets active pledges if active filter is given', function() {
      mapStateToProps(state, { filter: 'active' }).should.deep.equal({
        pledges: [
          {
            id: 5,
            aasm_state: 'active',
            initiator: {
              id: 3,
              name: 'Max'
            }
          },
          {
            id: 7,
            aasm_state: 'active',
            initiator: {
              id: 2,
              name: 'Carl'
            }
          }
        ]
      })
    })

    it('reduces the number of pledges to maxPledges if necessary', function() {
      mapStateToProps(state, { maxPledges: 2 }).should.deep.equal({
        pledges: [
          {
            id: 1,
            aasm_state: 'successful',
            initiator: {
              id: 3,
              name: 'Max'
            }
          },
          {
            id: 5,
            aasm_state: 'active',
            initiator: {
              id: 3,
              name: 'Max'
            }
          },
        ]
      })
    })
  })

  describe('mapDispatchToProps', function() {
    it('should return no props', function() {
      mapDispatchToProps({}).should.deep.equal({})
    })
  })
})
