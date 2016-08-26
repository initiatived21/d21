import deNormalizePledges from './deNormalizePledges'
import { merge } from 'lodash'

describe('deNormalizePledges', function() {
  const state = {
    pledges: {
      1: {
        id: 1,
        tags: [1, 2],
        initiator: 1,
      },
      2: {
        id: 2,
        tags: [1],
        initiator: 2,
      }
    },
    users: {
      1: {
        id: 1
      },
      2: {
        id: 2
      }
    },
    tags: {
      1: {
        id: 1
      },
      2: {
        id: 2
      }
    }
  }

  it('should denormalize the pledges and return them in an array', function() {
    const expectedOutcome = [
      {
        id: 1,
        initiator: {
          id: 1
        },
        tags: [
          {
            id: 1
          },
          {
            id: 2
          }
        ]
      },
      {
        id: 2,
        initiator: {
          id: 2
        },
        tags: [
          {
            id: 1
          }
        ]
      }
    ]

    deNormalizePledges(state).should.eql(expectedOutcome)
  })

  it('should not mutate the original state', function() {
    const copyOfState = merge({}, state)

    deNormalizePledges(state)

    state.should.eql(copyOfState)
  })
})
