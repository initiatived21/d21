class PledgeRelayJob < ApplicationJob
  def perform(pledge)
    ActionCable.server.broadcast 'pledges_all',
      pledge: pledge
  end
end
