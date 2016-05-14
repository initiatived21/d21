require_relative '../test_helper'

describe PledgeListCell, type: :cell do
  include Cell::Testing

  let(:renderedCell) do
    cell('pledge_list', [], filter: 'testScope', params: {}).call(:show)
  end

  before do
    # react_component calls controller.request internally
    PledgeListCell.any_instance.stubs(:request).returns(
      ::ActionController::TestRequest.create)
  end

  it 'renders a react ElementList' do
    renderedCell.must_match(/data-dom-id="ElementList-react-component-0"/)
  end
end
