module ApplicationHelper
  def menulink_class(link_path)
    if current_page?(link_path)
      'c-primary-nav__link c-primary-nav__link--active'
    else
      'c-primary-nav__link'
    end
  end
end
