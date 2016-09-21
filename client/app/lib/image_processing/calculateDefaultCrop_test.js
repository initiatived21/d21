import calculateDefaultCrop from './calculateDefaultCrop'

describe('calculateDefaultCrop', function() {
  it('should work for horizontal images and horizontal crops', function() {
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

  it('should work for horizontal images and vertical crops', function() {
    const
      imgWidth = 2000,
      imgHeight = 1000,
      aspect = 1 / 2
    const expectedCrop = {
      x: 37.5,
      y: 0,
      width: 25,
      height: 100,
      aspect
    }
    calculateDefaultCrop(imgWidth, imgHeight, aspect).should.eql(expectedCrop)
  })

  it('should work for vertical images and horizontal crops', function() {
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

  it('should work for vertical images and vertical crops', function() {
    const
      imgWidth = 1000,
      imgHeight = 2000,
      aspect = 2 / 3
    const expectedCrop = {
      x: 0,
      y: 12.5,
      width: 100,
      height: 75,
      aspect
    }
    calculateDefaultCrop(imgWidth, imgHeight, aspect).should.eql(expectedCrop)
  })
})
