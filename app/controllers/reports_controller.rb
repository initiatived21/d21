class ReportsController < ApplicationController
  def create
    Pledge.transaction do
      pledge = Pledge.find(params[:id])
      pledge.report_count += 1
      pledge.save!
    end
    flash[:success] = t('.success')
    redirect_back(
      fallback_location: pledge_path(locale: I18n.locale, id: params[:id])
    )
  end
end
