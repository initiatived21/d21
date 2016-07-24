module ReactHelper
  # Default ReactComponent settings
  def self.settings(props, params, html_options = {})
    {
      props: props.merge(locale: I18n.locale),
      prerender: params[:noprerender].nil? ? true : false,
      html_options: html_options
    }
  end
end
