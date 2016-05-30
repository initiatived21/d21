class FaqCell < Cell::ViewModel
  include Cell::Slim

  def show
    render
  end

  private

  def question_answer_sets
    translations = I18n.t('pages.faq')
    i = 1
    set = {}

    while translation = translations[:"question#{i}"]
      set[translation] = translations[:"answer#{i}"]
      i += 1
    end

    set
  end
end
