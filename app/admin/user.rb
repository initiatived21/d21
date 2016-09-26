ActiveAdmin.register User do
  permit_params :name, :organization, :email, :avatar

  index do
    selectable_column
    id_column
    column :name
    column :email
    column :organization
    column :created_at
    actions
  end

  filter :name
  filter :email
  filter :organization
  filter :created_at

  form do |f|
    f.inputs 'User Details' do
      f.input :name
      f.input :email
      f.input :organization
      f.input :avatar
    end
    f.actions
  end
end
