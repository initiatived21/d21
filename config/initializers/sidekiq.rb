schedule_file = 'config/schedule.yml'

if File.exists?(schedule_file) && Sidekiq.server?
  Sidekiq::Cron::Job.load_from_hash YAML.load_file(schedule_file)
end

if Rails.env.production?
  Sidekiq.configure_server do |config|
    config.redis = { url: 'redis://10.0.3.113:6379/4' }
  end

  Sidekiq.configure_client do |config|
    config.redis = { url: 'redis://10.0.3.113:6379/4' }
  end
end
