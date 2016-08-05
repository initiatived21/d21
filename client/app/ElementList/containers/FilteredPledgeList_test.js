import { mapStateToProps, mapDispatchToProps } from './FilteredPledgeList'

describe('FilteredPledgeList', function() {
  describe('mapStateToProps', function() {
    const state = {
      pledges: {
        1: {
          id: 1,
          aasm_state: 'successful'
        },
        5: {
          id: 5,
          aasm_state: 'active'
        },
        7: {
          id: 7,
          aasm_state: 'active'
        }
      }
    }

    it('sets all pledges if no filter is given', function() {
      mapStateToProps(state, {}).should.deep.equal({
        pledges: [
          { id: 1, aasm_state: 'successful' },
          { id: 5, aasm_state: 'active' },
          { id: 7, aasm_state: 'active' }
        ]
      })
    })

    it('sets successful pledges if successful filter is given', function() {
      mapStateToProps(state, { filter: 'successful' }).should.deep.equal({
        pledges: [
          { id: 1, aasm_state: 'successful' }
        ]
      })
    })

    it('sets active pledges if active filter is given', function() {
      mapStateToProps(state, { filter: 'active' }).should.deep.equal({
        pledges: [
          { id: 5, aasm_state: 'active' },
          { id: 7, aasm_state: 'active' }
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
