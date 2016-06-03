class ReactWithSerializationCell < Cell::ViewModel
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
      elements: serialized_elements
    }.merge(options[:props])
  end

  def params
    options[:params] || {}
  end

  def component
    options[:component]
  end

  def serialized_elements
    model.map do |element|
      ActiveModelSerializers::SerializableResource.new(element).as_json
    end
  end
end
