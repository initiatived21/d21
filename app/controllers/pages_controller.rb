# Static pages
class PagesController < ApplicationController
  def locale_forward
    redirect_to "/#{I18n.default_locale}"
  end

  def home
  end

  def faq
  end

  def impressum
  end

  def not_found
    render status: 404, formats: [:html]
  end
end
