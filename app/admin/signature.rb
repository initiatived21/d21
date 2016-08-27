ActiveAdmin.register Signature do
  permit_params :name, :email, :organization, :reason, :contact_person,
                :anonymous, :confirmed
end
