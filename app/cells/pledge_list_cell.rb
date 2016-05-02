class PledgeListCell < Cell::ViewModel
  include Cell::Slim
  include React::Rails::ViewHelper

  def show
    render
  end

  private

  def props
    {
      locale: I18n.locale,
      pledges: serialized_elements,
      filter: options[:filter]
    }
  end

  def settings
    options[:settings] || {}
  end

  def serialized_elements
    model.map do |element|
      ActiveModelSerializers::SerializableResource.new(element).as_json
    end
  end
end
