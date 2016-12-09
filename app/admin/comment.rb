ActiveAdmin.register Comment, as: 'Question' do
  permit_params :content, :response

  Comment.aasm.events.each do |aasm_event|
    action = aasm_event.name
    member_action action do
      @comment = Comment.find(params[:id])
      @comment.send("#{action}!")
      redirect_to admin_question_path(@comment)
    end
  end

  index do
    selectable_column
    id_column
    column :content
    column :response
    column :aasm_state
    column :created_at

    actions
  end

  show do
    attributes_table do
      row :content
      row :response
      row :pledge, sortable: 'pledges.title'
      row :aasm_state
      row :created_at
    end
  end

  sidebar 'Zustand', only: :show do
    attributes_table_for question do
      row :aasm_state do
        para "Aktuell: #{question.aasm_state}"

        permitted_events = Comment.aasm.events.map(&:name).select do |event|
          question.send("may_#{event}?")
        end

        permitted_events.map do |event|
          link_to("#{event.capitalize} ", send("#{event}_admin_question_path"))
        end
      end
    end
  end
end
