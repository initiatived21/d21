class PledgeListCell < Cell::ViewModel
  include Cell::Slim
  # include React::Rails::ViewHelper
  include ReactOnRailsHelper

  def show
    render
  end

  private

  def opts
    ReactHelper.settings(props, params)
  end

  def props
    {
      locale: I18n.locale,
      pledges: serialized_elements,
      filter: options[:filter]
    }
  end

  def params
    options[:params] || {}
  end

  def serialized_elements
    model.map do |element|
      ActiveModelSerializers::SerializableResource.new(element).as_json
    end
  end
end
