ActiveAdmin.register_page 'Dashboard' do
  menu priority: 1, label: proc { I18n.t('active_admin.dashboard') }

  content title: proc { I18n.t('active_admin.dashboard') } do
    columns do
      column do
        panel 'Pledges, die auf Bestätigung warten' do
          requested_pledges = Pledge.requested
          if requested_pledges.count > 0
            ul do
              requested_pledges.map do |pledge|
                li link_to(pledge.content, admin_pledge_path(pledge))
              end
            end
          else
            para 'Aktuell warten keine Pledges auf Bestätigung.'
          end
        end
      end

      column do
        panel 'Info' do
          para "Wir haben aktuell #{Pledge.active.count} aktive Pledges auf"\
               ' der Plattform.'
        end
      end
    end
  end # content
end
