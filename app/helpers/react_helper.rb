module ReactHelper
  # Default ReactComponent settings
  def self.settings(props, params)
    {
      props: props.merge(locale: I18n.locale),
      prerender: params[:noprerender].nil? ? true : false
    }
  end
end
