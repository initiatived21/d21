ActiveAdmin.register Signature do
  permit_params :name, :email, :organization, :reason, :contact_person,
                :anonymous, :confirmed

  index do
    selectable_column
    id_column
    column :name
    column :email
    column :organization
    column :contact_person
    column :pledge, sortable: 'pledges.title'
    column :reason
    column :anonymous
    column :created_at
    column :confirmed
    actions
  end

controller do
  def scoped_collection
    super.includes :pledge # prevents N+1 queries to your database
  end
end

end
