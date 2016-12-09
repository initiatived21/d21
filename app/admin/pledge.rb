ActiveAdmin.register Pledge do
  permit_params :content, :amount, :who, :requirement, :location, :deadline,
                :description, :title, :image, :recommended, :locale

  Pledge.aasm.events.each do |aasm_event|
    action = aasm_event.name
    member_action action do
      @pledge = Pledge.find(params[:id])
      @pledge.send("#{action}!")
      redirect_to admin_pledge_path(@pledge)
    end
  end

  index do
    selectable_column
    id_column
    column :title

    column 'Initiator', :users do |pledge|
      table_for pledge.initiator do
        column do |initiator|
          link_to initiator.name, [ :admin, initiator ]
        end
        column do |initiator|
          link_to initiator.organization, [ :admin, initiator ]
        end
      end
    end

    column :deadline
    column :report_count
    column :aasm_state
    column :recommended
    column :created_at

    actions
  end

  show do
    attributes_table do
      row :title
      table_for pledge.initiator do
        column "Initiator" do |initiator|
          link_to initiator.name, [ :admin, initiator ]
         end
        column do |initiator|
          link_to initiator.organization, [ :admin, initiator ]
        end
      end
      row :content
      row :amount
      row :who
      row :requirement
      row :location
      row :deadline
      row :description
      row :created_at
      row :updated_at
      row :user_id
      row :image
      row :report_count
      row :recommended
      row :locale
      row :image_width
      row :image_height
    end
  end

  sidebar 'Zustand', only: :show do
    attributes_table_for pledge do
      row :aasm_state do
        para "Aktuell: #{pledge.aasm_state}"

        permitted_events = Pledge.aasm.events.map(&:name).select do |event|
          pledge.send("may_#{event}?")
        end

        permitted_events.map do |event|
          link_to("#{event.capitalize} ", send("#{event}_admin_pledge_path"))
        end
      end
    end
  end
end
