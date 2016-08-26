require 'reform/form/dry'
Reform::Form.class_eval do
  feature Reform::Form::Dry
end

# ! Reform Hack to allow internationalized error messages !
class Reform::Form::Dry::Validations::Group
  def call(fields, reform_errors, form)
    @validator.with(form: form).call(fields).messages(locale: I18n.locale)
              .each do |field, dry_error|
      dry_error.each do |attr_error|
        reform_errors.add(field, attr_error)
      end
    end
  end
end
