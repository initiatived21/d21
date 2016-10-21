module PledgesHelper
  def pledge_image_for_facebook?(pledge)
    pledge.image.present? &&
    pledge.image_width.present? && pledge.image_height.present? &&
    pledge.image_width >= 200 && pledge.image_height >= 200 &&
    pledge.image.file.size <= 8388608
  end

  def user_image_for_facebook?(user)
    user.avatar.present? &&
    user.avatar_width.present? && user.avatar_height.present? &&
    user.avatar_width >= 200 && user.avatar_height >= 200 &&
    user.avatar.file.size <= 8388608
  end
end
