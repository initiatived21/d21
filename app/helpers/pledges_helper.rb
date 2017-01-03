module PledgesHelper
  def card_available?(pledge, locale)
    pledge.send("card_#{locale}").present?
  end

  def card_image_url(pledge, locale)
    # Time-based query string to bust Facebook's/Twitter's cache.
    query_part = pledge.updated_at.to_i
    "#{request.base_url}#{pledge.send('card_' + locale.to_s)}?v=#{query_part}"
  end
end
