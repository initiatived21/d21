class PledgesController < ApplicationController
  def new
    @pledge_props = { locale: I18n.locale }
  end
end
