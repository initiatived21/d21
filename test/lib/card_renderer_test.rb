require_relative '../test_helper'

describe CardRenderer do
  it 'should be initializable with a pledge object' do
    pledge = Pledge.new
    renderer = CardRenderer.new(pledge)
    assert_not_nil(renderer)
  end

  it 'should save two cards to the pledge object' do
    pledge = FactoryGirl.create(:pledge)

    file = mock()
    file.expects(:read).once.returns('dummy { css; }')
    File.stubs(:new).returns(file)

    imgkit = mock()
    imgkit.expects(:to_img).twice.with(:png).returns('dummy_image_string')
    IMGKit.stubs(:new).returns(imgkit)

    image_optim = mock()
    image_optim.expects(:optimize_image_data).twice.returns('dummy_image_string')
    ImageOptim.stubs(:new).returns(image_optim)

    pledge.expects(:card_de=).with() { |value| value.class.name == 'StringIO' }
    pledge.expects(:card_en=).with() { |value| value.class.name == 'StringIO' }

    renderer = CardRenderer.new(pledge)
    renderer.render
  end
end
