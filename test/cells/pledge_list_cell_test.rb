require_relative '../test_helper'

describe PledgeListCell, type: :cell do
  include Cell::Testing

  let(:renderedCell) do
    cell('pledge_list', [], scope: 'testScope').call(:show)
  end

  it 'renders a react ElementList' do
    renderedCell.must_match(/div data-react-class="ElementList"/)
  end
end
