module ReactHelper
  # Default ReactComponent settings
  def self.settings(props, params)
    {
      props: props,
      prerender: params[:noprerender].nil? ? true : false
    }
  end
end
