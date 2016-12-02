class RenderCardWorker
  include Sidekiq::Worker

  def perform(pledge_id)
    pledge = Pledge.find(pledge_id)
    renderer = CardRenderer.new(pledge)
    renderer.render
  end
end
