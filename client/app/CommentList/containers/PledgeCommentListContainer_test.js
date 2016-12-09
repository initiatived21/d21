import { filterOwnComments, filterApprovedComments } from './PledgeCommentListContainer'

describe('PledgeCommentListContainer', function () {
  describe('filterOwnComments', function() {
    it('should filter comments belonging to the pledge', function() {
      const comments = [
        {
          id: 1,
          pledge_id: 1,
          aasm_state: 'approved',
        },
        {
          id: 2,
          pledge_id: 1,
          aasm_state: 'approved',
        },
        {
          id: 3,
          pledge_id: 2,
          aasm_state: 'approved',
        }
      ]
      const pledgeId = 1

      const expected = [
        {
          id: 1,
          pledge_id: 1,
          aasm_state: 'approved',
        },
        {
          id: 2,
          pledge_id: 1,
          aasm_state: 'approved',
        }
      ]

      filterOwnComments(comments, pledgeId).should.eql(expected)
    })
  })

  describe('filterApprovedComments', function() {
    it('should filter comments that are approved', function() {
      const comments = [
        {
          id: 1,
          pledge_id: 1,
          aasm_state: 'initialized',
        },
        {
          id: 2,
          pledge_id: 1,
          aasm_state: 'approved',
        },
        {
          id: 3,
          pledge_id: 1,
          aasm_state: 'disapproved',
        }
      ]
      const pledgeId = 1

      const expected = [
        {
          id: 2,
          pledge_id: 1,
          aasm_state: 'approved',
        }
      ]

      filterApprovedComments(comments).should.eql(expected)
    })
  })
})
