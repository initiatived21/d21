module PledgesHelper
  def card_available?(pledge, locale)
    pledge.send("card_#{locale}").present?
  end
end
