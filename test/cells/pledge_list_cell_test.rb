require_relative '../test_helper'

describe PledgeListCell, type: :cell do
  include Cell::Testing

  let(:emptyCell) do
    cell('pledge_list', [], filter: 'testScope', params: {}).call(:show)
  end

  let(:filledCell) do
    cell('pledge_list', Pledge.all, filter: 'testScope', params: {}).call(:show)
  end

  before do
    # react_component calls controller.request internally
    PledgeListCell.any_instance.stubs(:request).returns(
      ::ActionController::TestRequest.create
    )
  end

  it 'renders a react ElementList' do
    emptyCell.must_match(/data-component-name="ElementList"/)
    # doesn't have "active" pledge fixture props
    emptyCell.wont_match(/&quot;content&quot;:&quot;activeContent&quot;,/)
  end

  it 'renders given plege children' do
    # has "active" pledge fixture props
    filledCell.must_match(/&quot;content&quot;:&quot;activeContent&quot;,/)
  end
end
