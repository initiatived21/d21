ActiveAdmin.register Pledge do
  permit_params :content, :amount, :who, :requirement, :location, :deadline,
                :description

  Pledge.aasm.events.each do |aasm_event|
    action = aasm_event.name
    member_action action do
      @pledge = Pledge.find(params[:id])
      @pledge.send("#{action}!")
      redirect_to admin_pledge_path(@pledge)
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
          link_to event.capitalize, send("#{event}_admin_pledge_path")
        end
      end
    end
  end
end