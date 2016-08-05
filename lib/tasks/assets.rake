# These tasks run as pre-requisites of assets:precompile.
# Note, it's not possible to refer to ReactOnRails configuration values at this point.
Rake::Task["assets:precompile"]
  .clear_prerequisites
  .enhance([:environment, "react_on_rails:assets:compile_environment"])
  .enhance do
    Rake::Task["react_on_rails:assets:symlink_non_digested_assets"].invoke
    Rake::Task["react_on_rails:assets:delete_broken_symlinks"].invoke
  end
