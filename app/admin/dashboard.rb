ActiveAdmin.register_page 'Dashboard' do

  menu priority: 1, label: proc{ I18n.t('active_admin.dashboard') }

  content title: proc{ I18n.t('active_admin.dashboard') } do
    columns do
      column do
        panel 'Pledges, die auf Bestätigung warten' do
          ul do
            Pledge.last(5).map do |pledge|
              li link_to(pledge.content, '/') # admin_post_path(pledge))
            end
          end
        end
      end

      column do
        panel 'Info' do
          para 'Welcome to ActiveAdmin'
        end
      end
    end
  end # content
end
