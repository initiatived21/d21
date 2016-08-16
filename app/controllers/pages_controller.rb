# Static pages
class PagesController < ApplicationController
  def locale_forward
    redirect_to "/#{I18n.default_locale}"
  end

  def home
    @successful_pledges = serialize(Pledge.successful.limit(4))
  end

  def faq
  end

  def impressum
  end

  def terms
  end

  def privacy
  end

  def sitemap
  end

  def contact
  end

  def howitworks
  end

  def not_found
    render status: 404, formats: [:html]
  end
end
