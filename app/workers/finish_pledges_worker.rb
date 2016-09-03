class FinishPledgesWorker
  include Sidekiq::Worker
  # Scheduled

  def perform()
    Pledge.transaction do
      Pledge.select(:id, :aasm_state, :deadline).active
            .where('deadline < ?', Date.current).find_each do |pledge|
        FinishPledgeWorker.perform_async(pledge.id)
      end
    end
  end
end
