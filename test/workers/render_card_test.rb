require_relative '../test_helper'

class RenderCardTest < ActiveSupport::TestCase
  let(:worker) { RenderCardWorker.new }

  it 'should call the CardRenderer on the given pledge' do
    pledge = pledges(:active)
    renderer_stub = stub()
    renderer_stub.expects(:render)
    CardRenderer.expects(:new).returns(renderer_stub)
    worker.perform(pledge.id)
  end
end
