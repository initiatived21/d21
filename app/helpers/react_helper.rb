module ReactHelper
  # Default ReactComponent settings
  def self.settings(params)
    { prerender: params[:noprerender].nil? ? true : false }
  end
end
