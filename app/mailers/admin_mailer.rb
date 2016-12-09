# Contains mailings to the admin users about things happening on the platform.
class AdminMailer < ApplicationMailer
  def new_pledge pledge_id
    @pledge = Pledge.find(pledge_id)

    mail subject: 'Ein Versprechen wartet auf Freigabe',
         to: SYSTEM_MAIL
  end

  def new_report pledge_id
    @pledge = Pledge.find(pledge_id)

    mail subject: 'Ein Versprechen wurde gemeldet',
         to: SYSTEM_MAIL
  end

  def new_question comment_id
    @comment = Comment.find(comment_id)

    mail(subject: 'Eine Frage wartet auf Freigabe', to: SYSTEM_MAIL)
  end
end
