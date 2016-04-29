# Static pages
class PagesController < ApplicationController
  def locale_forward
    redirect_to "/#{I18n.default_locale}"
  end

  def home
    @list_props = {
      locale: I18n.locale,
      pledges: Pledge.last(4).map do |pledge|
        ActiveModelSerializers::SerializableResource.new(pledge).as_json
      end
    }
  end

  def faq
  end

  def impressum
  end

  def not_found
    render status: 404, formats: [:html]
  end
end
