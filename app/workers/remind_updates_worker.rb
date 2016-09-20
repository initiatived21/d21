class RemindUpdatesWorker
  include Sidekiq::Worker
  # Scheduled

  def perform
    Pledge.transaction do
      each_non_updated_successful_pledge do |pledge|
        InitiatorMailer.needs_successful_update(pledge.id).deliver_later
      end
    end
  end

  def each_non_updated_successful_pledge &block
    Pledge.successful.includes(:updates)
          .where("pledges.deadline = ?", Date.current - 2.weeks)
          .find_each do |pledge|
      deadline = pledge.deadline
      if (pledge.updates.to_a.select { |u| u.created_at.to_date >= deadline }.empty?)
        yield pledge
      end
    end
  end
end
