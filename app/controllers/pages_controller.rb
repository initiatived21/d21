# Static pages
class PagesController < ApplicationController
  def locale_forward
    redirect_to "/#{I18n.default_locale}"
  end

  def home
    newest_query =
      Pledge.where(aasm_state: 'active').order(created_at: :desc).limit(12)
    @newest_pledges = serialize(newest_query)

    recommended_query =
      Pledge.where(aasm_state: %w(active successful), recommended: true)
        .order(updated_at: :desc).limit(3)
    @recommended_pledges = serialize(recommended_query)
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
