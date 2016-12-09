class ReportsController < ApplicationController
  def create
    pledge_id = params[:id]

    Pledge.transaction do
      pledge = Pledge.find(pledge_id)
      pledge.report_count += 1
      pledge.save!
    end

    AdminMailer.new_report(pledge_id).deliver_later

    flash[:success] = t('.success')
    redirect_back(
      fallback_location: pledge_path(locale: I18n.locale, id: pledge_id)
    )
  end
end
