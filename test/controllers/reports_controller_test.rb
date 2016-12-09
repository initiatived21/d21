require_relative '../test_helper'

describe ReportsController do
  describe "POST 'create'" do
    let(:pledge) { pledges(:active) }

    it 'should increase the report_count of the given pledge and send email to admin' do
      pledge.reload.report_count.must_equal 0
      AdminMailer.expect_chain(:new_report, :deliver_later)
      post :create, params: { locale: 'de', id: pledge.id }
      assert_response 302
      assert_redirected_to '/de/pledges/1'
      pledge.reload.report_count.must_equal 1
    end
  end
end
