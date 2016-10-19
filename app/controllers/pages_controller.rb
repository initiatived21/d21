# Static pages
class PagesController < ApplicationController
  def locale_forward
    redirect_locale = current_user ? current_user.locale : I18n.default_locale
    redirect_to "/#{redirect_locale}"
  end

  def home
    recommended_query =
      Pledge.where(aasm_state: %w(active successful failed), recommended: true)
            .order(updated_at: :desc).limit(6)
    @recommended_pledges = serialize(recommended_query)

    successful_query =
      Pledge.where(aasm_state: 'successful').order(created_at: :desc).limit(6)
    @successful_pledges = serialize(successful_query)

    newest_query =
      Pledge.where(aasm_state: 'active').order(created_at: :desc).limit(12)
    @newest_pledges = serialize(newest_query)
  end

  def faq
  end

  def impressum
  end

  def terms
  end

  def privacy
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
