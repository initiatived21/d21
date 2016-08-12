class InstallPgSearchPackages < ActiveRecord::Migration[5.0]
  def up
    # Needed, but a migration doesn't necessarily have the rights
    # execute "CREATE EXTENSION pg_trgm;"
  end

  def down
    # execute "DROP EXTENSION pg_trgm;"
  end
end
