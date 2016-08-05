# config valid only for current version of Capistrano
lock '3.6.0'

set :application, 'd21'
set :repo_url, 'git@github.com:initiatived21/d21.git'

set :ssh_options, forward_agent: true

set :rbenv_type, :user # or :system, depends on your rbenv setup
set :rbenv_ruby, File.read('.ruby-version').strip # set ruby version from the file
set :rbenv_prefix, "RBENV_ROOT=#{fetch(:rbenv_path)} RBENV_VERSION=#{fetch(:rbenv_ruby)} #{fetch(:rbenv_path)}/bin/rbenv exec"
set :rbenv_map_bins, %w{rake gem bundle ruby rails}
set :rbenv_roles, :all # default value

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, '/var/www/my_app_name'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: 'log/capistrano.log', color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
set :linked_files, fetch(:linked_files, [])
  .push('config/database.yml', 'config/secrets.yml')
# append :linked_files, 'config/database.yml', 'config/secrets.yml'

# Default value for linked_dirs is []
set :linked_dirs, fetch(:linked_dirs, []).push(
  'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle',
  'public/system', 'public/uploads'
)
# append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/system'

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5


namespace :deploy do
  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      # Your restart mechanism here, for example:
      execute :touch, release_path.join('tmp/restart.txt')
    end
  end

  after :publishing, :restart

  after :finishing, 'deploy:cleanup'
end

namespace :rails do
  desc 'Open the rails console on each of the remote servers'
  task :console do
    on roles(:console), primary: true do |host|
      rails_env = fetch(:stage)
      within current_path do
        execute_interactively "~/.rbenv/bin/rbenv exec bundle exec rails console #{rails_env}", host
      end
    end
  end

  desc 'Open the rails dbconsole on each of the remote servers'
  task :dbconsole do
    on roles(:db), primary: true do |host|
      rails_env = fetch(:stage)
      within current_path do
        execute_interactively "~/.rbenv/bin/rbenv exec bundle exec rails dbconsole #{rails_env}", host
      end
    end
  end

  def execute_interactively(command, host)
    command_string = "ssh -l #{host.user} #{host} -p 22 -t 'cd #{deploy_to}/current && #{command}'"
    puts command_string
    exec command_string
  end
end
