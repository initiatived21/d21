class AdminMailerPreview < ActionMailer::Preview
  def new_pledge
    AdminMailer.new_pledge(Pledge.first.id)
  end

  def new_report
    AdminMailer.new_report(Pledge.first.id)
  end

  def new_question
    AdminMailer.new_question(Comment.first.id)
  end
end
