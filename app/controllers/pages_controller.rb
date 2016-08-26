# Static pages
class PagesController < ApplicationController
  def locale_forward
    redirect_to "/#{I18n.default_locale}"
  end

  def home
    query = Pledge.where(aasm_state: 'active').order(created_at: :desc).limit(12)
    @newest_pledges = serialize(query)
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

  def about
  end

  def press
  end

  def not_found
    render status: 404, formats: [:html]
  end
end
