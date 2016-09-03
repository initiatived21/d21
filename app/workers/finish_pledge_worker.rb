class FinishPledgeWorker
  include Sidekiq::Worker

  def perform(pledge_id)
    pledge = Pledge.find(pledge_id)
    pledge.finish!
  end
end
