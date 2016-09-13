require_relative '../test_helper'

class SearchTest < AcceptanceTest
  it 'should find partial matches' do
    FactoryGirl.create :pg_search_document, content: 'searchable'
    FactoryGirl.create :pg_search_document, content: 'will not be found'
    visit '/'

    fill_in 'query', with: 'sear'
    click_button 'Suchen'

    page.must_have_content 'searchable'
    page.wont_have_content 'will not be found'
  end
end
