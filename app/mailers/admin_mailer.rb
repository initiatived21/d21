# Contains mailings to the admin users about things happening on the platform.
class AdminMailer < ApplicationMailer
  def new_pledge pledge_id
    @pledge = Pledge.find(pledge_id)

    mail subject: 'Ein Versprechen wartet auf Freigabe',
         to: 'redaktion@buntundverbindlich.de'
  end
end
