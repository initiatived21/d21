ActiveAdmin.register Tag do
  permit_params :name, :color

  form do |f|
    f.inputs 'Tag Details' do
      f.input :name
      f.input :color, input_html: { type: 'text' }
    end
    f.actions
  end
end
