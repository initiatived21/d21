require_relative '../test_helper'

describe PledgesHelper do
  describe '#pledge_image_for_facebook?' do
    it 'should return false if pledge has no image' do
      pledge = mock()
      pledge.stubs(:image).returns(nil)
      refute pledge_image_for_facebook?(pledge)
    end

    it 'should return false if image size is not set' do
      pledge = mock()
      pledge.stubs(:image).returns(mock())
      pledge.stubs(:image_width).returns(nil)
      pledge.stubs(:image_height).returns(nil)
      refute pledge_image_for_facebook?(pledge)
    end

    it 'should return false if image is too small' do
      pledge = mock()
      pledge.stubs(:image).returns(mock())
      pledge.stubs(:image_width).returns(199)
      pledge.stubs(:image_height).returns(199)
      refute pledge_image_for_facebook?(pledge)
    end

    it 'should return false if image size too big' do
      file = mock()
      file.stubs(:size).returns(9000000)
      image = mock()
      image.stubs(:file).returns(file)
      pledge = mock()
      pledge.stubs(:image).returns(image)
      pledge.stubs(:image_width).returns(200)
      pledge.stubs(:image_height).returns(200)
      refute pledge_image_for_facebook?(pledge)
    end

    it 'should return true with minimum image size' do
      file = mock()
      file.stubs(:size).returns(100000)
      image = mock()
      image.stubs(:file).returns(file)
      pledge = mock()
      pledge.stubs(:image).returns(image)
      pledge.stubs(:image_width).returns(200)
      pledge.stubs(:image_height).returns(200)
      assert pledge_image_for_facebook?(pledge)
    end
  end

  describe '#user_image_for_facebook?' do
    it 'should return false if user has no avatar' do
      user = mock()
      user.stubs(:avatar).returns(nil)
      refute user_image_for_facebook?(user)
    end

    it 'should return false if avatar size is not set' do
      user = mock()
      user.stubs(:avatar).returns(mock())
      user.stubs(:avatar_width).returns(nil)
      user.stubs(:avatar_height).returns(nil)
      refute user_image_for_facebook?(user)
    end

    it 'should return false if avatar is too small' do
      user = mock()
      user.stubs(:avatar).returns(mock())
      user.stubs(:avatar_width).returns(199)
      user.stubs(:avatar_height).returns(199)
      refute user_image_for_facebook?(user)
    end

    it 'should return false if avatar size too big' do
      file = mock()
      file.stubs(:size).returns(9000000)
      avatar = mock()
      avatar.stubs(:file).returns(file)
      user = mock()
      user.stubs(:avatar).returns(avatar)
      user.stubs(:avatar_width).returns(200)
      user.stubs(:avatar_height).returns(200)
      refute user_image_for_facebook?(user)
    end

    it 'should return true with minimum avatar size' do
      file = mock()
      file.stubs(:size).returns(100000)
      avatar = mock()
      avatar.stubs(:file).returns(file)
      user = mock()
      user.stubs(:avatar).returns(avatar)
      user.stubs(:avatar_width).returns(200)
      user.stubs(:avatar_height).returns(200)
      assert user_image_for_facebook?(user)
    end
  end
end
