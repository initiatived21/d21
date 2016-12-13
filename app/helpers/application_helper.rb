module ApplicationHelper
  def mail_paragraph(&block)
    attributes = {
      style: "color: #3d3d3d; font-family: Times, 'Times New Roman', 'Liberation Serif', "\
        "serif; font-size: 16px; font-weight: normal; line-height: 20px;"
    }

    capture do
      concat content_tag(:tr, content_tag(:td, attributes, &block))
      concat "\n"
      concat render('/layouts/partials/mail_spacer')
    end
  end
end
