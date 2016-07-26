# encoding: utf-8

class AvatarUploader < CarrierWave::Uploader::Base
  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  storage :file
  # storage :fog

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url
  #   # For Rails 3.1+ asset pipeline compatibility:
  #   # ActionController::Base.helpers.asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
  #
  #   "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  # end

  # Process files as they are uploaded:
  # process :scale => [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end
  process crop: '300x150+0+0'
  #process resize_to_fill: [200, 200]

  # Create different versions of your uploaded files:
  # version :thumb do
  #   process :resize_to_fit => [50, 50]
  # end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_white_list
    %w(jpg jpeg png)
  end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  # def filename
  #   "something.jpg" if original_filename
  # end

private

  # Simplest way
  def crop(geometry)
    offset_x = 0.1
    offset_y = 0.1
    width = 0.2
    height = 0.3

    binding.pry

    # avatar_crop_geometry
    # -> evtl. gleich richtig in JavaScript berechnen, dann kann man sie gleich
    # übergeben ohne Regex!
    # "0.2x0.3+0.1+0.1"
    # Regex /^([0-9.]+)x([0-9.]+)\+([0-9.]+)\+([0-9.]+)$/

    manipulate! do |img|
      a = img.width
      b = img.height
      str = "#{a * width}x#{b * height}+#{a * offset_x}+#{b * offset_y}"
      img.crop(str)
    end
  end
end
