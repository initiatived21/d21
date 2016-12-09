require_relative '../test_helper'

class CommentTest < AcceptanceTest
  it 'should display questions after they have been approved', js: true do
    pledge = Pledge.find(1)

    visit "/de/pledges/#{pledge.id}"

    page.must_have_content 'activeContent'
    page.must_have_content 'Es gibt noch keine Fragen'

    page.must_have_css '#QuestionForm-2'
    within('#QuestionForm-2') do
      fill_in 'comment[content]', with: 'Wie viel bringt das Projekt wirklich?'
      click_button 'Absenden'
    end

    # Test with Ajax
    page.wont_have_content 'Wie viel bringt das Projekt wirklich?'
    page.wont_have_css '#QuestionForm-2'
    page.must_have_content 'Wir haben Ihre Frage empfangen und schalten sie so bald wie möglich frei.'

    # Test again with page reload
    visit "/de/pledges/#{pledge.id}"
    page.wont_have_content 'Wie viel bringt das Projekt wirklich?'

    Comment.last.approve!
    visit "/de/pledges/#{pledge.id}"
    page.must_have_content 'Wie viel bringt das Projekt wirklich?'
  end
end
