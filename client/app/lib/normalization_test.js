import normalize from './normalization';

describe('Normalization#normalize', function() {
  let pledge =
    {id: 1, content: 'foo', initiator: { id: 2, name: 'Carl' }};

  it('should normalize a single pledge', function() {
    let expected = {
      entities: {
        pledges: {
          1: pledge
        }
      },
      result: 1
    };
    let output = normalize('pledge', pledge);
    return output.should.deep.equal(expected);
  });

  it('should normalize multiple pledges', function() {
    let pledge2 = { id: 3, content: 'bar', initiator: pledge.initiator };
    let pledges = [pledge, pledge2];
    let expected = {
      entities: {
        pledges: {
          1: pledge,
          3: pledge2
        }
      },
      result: [1, 3]
    };
    let output = normalize('pledges', pledges);
    return output.should.deep.equal(expected);
  });
});
