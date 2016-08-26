class InstallPgSearchPackages < ActiveRecord::Migration[5.0]
  def up
    # Needed, but a production migration doesn't necessarily have the rights
    if Rails.env.development?
      execute "CREATE EXTENSION pg_trgm;"
    end
  end

  def down
    if Rails.env.development?
      execute "DROP EXTENSION pg_trgm;"
    end
  end
end
