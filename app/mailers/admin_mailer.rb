# Contains mailings to the admin users about things happening on the platform.
class AdminMailer < ApplicationMailer
  default from: 'system@initiatived21.de'

  def new_pledge pledge_id
    @pledge = Pledge.find(pledge_id)

    mail subject: 'Neues Versprechen benötigt Bestätigung',
         to: AdminUser.first.email
  end
end
