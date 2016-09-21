import calculateDefaultCrop from './calculateDefaultCrop'

describe('calculateDefaultCrop', function() {
  it('should work for horizontal image and smaller crop aspect ratio', function() {
    const
      imgWidth = 2000,
      imgHeight = 1000,
      aspect = 3 / 2
    const expectedCrop = {
      x: 12.5,
      y: 0,
      width: 75,
      height: 100,
      aspect
    }
    calculateDefaultCrop(imgWidth, imgHeight, aspect).should.eql(expectedCrop)
  })

  it('should work for horizontal image and larger crop aspect ratio', function() {
    const
      imgWidth = 652,
      imgHeight = 560,
      aspect = 3 / 2
    const expectedCrop = {
      x: 0,
      y: 11.19047619047619,
      width: 100,
      height: 77.61904761904762,
      aspect
    }
    calculateDefaultCrop(imgWidth, imgHeight, aspect).should.eql(expectedCrop)
  })

  it('should work for vertical images and smaller crop aspect ratio', function() {
    const
      imgWidth = 1000,
      imgHeight = 2000,
      aspect = 1 / 3
    const expectedCrop = {
      x: 0,
      y: 41.66666666666667,
      width: 100,
      height: 16.666666666666664,
      aspect
    }
    calculateDefaultCrop(imgWidth, imgHeight, aspect).should.eql(expectedCrop)
  })

  it('should work for vertical images and larger crop aspect ratio', function() {
    const
      imgWidth = 1000,
      imgHeight = 2000,
      aspect = 2 / 1
    const expectedCrop = {
      x: 0,
      y: 37.5,
      width: 100,
      height: 25,
      aspect
    }
    calculateDefaultCrop(imgWidth, imgHeight, aspect).should.eql(expectedCrop)
  })
})
