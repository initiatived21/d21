ActiveAdmin.register Comment, as: 'Fragen_und_Antworten' do
  permit_params :content, :response
end
