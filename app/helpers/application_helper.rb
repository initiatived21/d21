module ApplicationHelper

  def menulink_class(link_path)
    current_page?(link_path) ?
      'c-primary-nav__link c-primary-nav__link--active' : 'c-primary-nav__link'
  end

end
