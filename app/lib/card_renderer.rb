require 'image_optim'

class CardRenderer
  include ReactOnRailsHelper
  include ActionView::Helpers::TagHelper

  CSS_PATH = Rails.root.join('app', 'assets', 'webpack', 'main.css')
  # Optimized for Facebook with aspect ratio of 1.91/1
  IMAGE_WIDTH   = 840
  IMAGE_HEIGHT  = 440
  CARD_FILENAME_DE = 'pledge_card_de.png'
  CARD_FILENAME_EN = 'pledge_card_en.png'

  IMAGE_OPTIM_CONFIG = {
    nice: 20,
    optipng: {
      level: 2
    },
    advpng: false,
    gifsicle: false,
    jhead: false,
    jpegoptim: false,
    jpegrecompress: false,
    jpegtran: false,
    pngcrush: false,
    pngout: false,
    pngquant: false,
    svgo: false
  }

  TEMPLATE = <<-EOF
    <!DOCTYPE html>
    <html lang="<%= @locale %>">
    <head>
      <meta charset="utf-8" />
      <style>
        <%= @css %>
      </style>
    </head>
    <body>
      <%= react_component 'SocialMediaCard', props: { pledge: @pledge_props,
        avatarPath: @avatar_path, locale: @locale }, prerender: true %>
    </body>
    </html>
  EOF

  def initialize(pledge)
    @pledge = pledge
    @locale = nil
    @html = nil
    @image_data = nil
  end

  def render
    set_vars_for_template
    render_for_locale(:de)
    render_for_locale(:en)
  end

  def set_vars_for_template
    @pledge_props = PledgeSerializer.new(@pledge).serializable_hash
    @avatar_path = @pledge.initiator.avatar.path
    @css = File.new(CSS_PATH).read
  end

  def render_for_locale(locale)
    @locale = locale
    render_template
    render_and_optimize_image
    save_to_pledge
  end

  def render_template
    @html = ERB.new(TEMPLATE).result(binding)
  end

  def render_and_optimize_image
    render_image
    optimize_image
    prepare_for_carrierwave
  end

  def render_image
    kit = IMGKit.new(@html, width: IMAGE_WIDTH, height: IMAGE_HEIGHT)
    @image_data = kit.to_img(:png)
  end

  def optimize_image
    image_optim = ImageOptim.new(IMAGE_OPTIM_CONFIG)
    @image_data = image_optim.optimize_image_data(@image_data)
  end

  def prepare_for_carrierwave
    @image_data = StringIO.new(@image_data)
    if @locale == :de
      def @image_data.original_filename; CARD_FILENAME_DE; end
    elsif @locale == :en
      def @image_data.original_filename; CARD_FILENAME_EN; end
    end
  end

  def save_to_pledge
    @pledge.send("card_#{@locale}=", @image_data)
    @pledge.save
  end

  # Dummy methods needed for react-on-rails < 6.3.2
  # react-on-rails > 6.1.2 has an issue with Turbolinks leading to 'component flickering'
  # See also: https://github.com/shakacode/react_on_rails/issues/629
  def controller
  end

  def request
  end
end
