import normalize from './normalization.js'

describe('Normalization#normalize', function() {
  const pledge = {
    id: 1,
    content: 'foo',
    initiator: {
      id: 2,
      name: 'Carl'
    }
  }

  it('should normalize a single pledge', function() {
    const expected = {
      entities: {
        pledges: {
          1: {
            id: 1,
            content: 'foo',
            initiator: 2
          }
        },
        users: {
          2: {
            id: 2,
            name: 'Carl'
          }
        }
      },
      result: 1
    }

    const output = normalize('pledge', pledge)

    output.should.deep.equal(expected)
  })

  it('should normalize multiple pledges', function() {
    const pledge2 = {
      id: 3,
      content: 'bar',
      initiator: pledge.initiator
    }

    const pledges = [pledge, pledge2]
    const expected = {
      entities: {
        pledges: {
          1: {
            id: 1,
            content: 'foo',
            initiator: 2
          },
          3: {
            id: 3,
            content: 'bar',
            initiator: 2
          }
        },
        users: {
          2: {
            id: 2,
            name: 'Carl'
          }
        }
      },
      result: [1, 3]
    }

    const output = normalize('pledges', pledges)

    output.should.deep.equal(expected)
  })
})
