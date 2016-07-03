require_relative '../test_helper'

describe ApplicationController do
  describe '#json_request?' do
    it 'should return information about the request format' do
      ApplicationController.any_instance
        .stub_chain(:request, :format, :json?).returns true
      ApplicationController.new.send(:json_request?).must_equal true

      ApplicationController.any_instance
        .stub_chain(:request, :format, :json?).returns false
      ApplicationController.new.send(:json_request?).must_equal false
    end
  end
end
