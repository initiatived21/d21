class PledgesChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'pledges_all'
  end
end
