class ReportsController < ApplicationController
  def create
    Pledge.transaction do
      pledge = Pledge.find(params[:id])
      pledge.report_count += 1
      pledge.save!
    end
    flash[:success] = t('.success')
    redirect_to :back
  end
end
