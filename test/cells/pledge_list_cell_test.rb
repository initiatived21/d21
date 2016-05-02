require 'test_helper'

class PledgeListCellTest < Cell::TestCase
  test "show" do
    html = cell("pledge_list").(:show)
    assert html.match /<p>/
  end


end
