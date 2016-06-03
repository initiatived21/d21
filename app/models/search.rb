class Search
  attr_reader :results

  def initialize params
    @query = params['query']
  end

  def run
    @results = PgSearch.multisearch(@query)
  end

  def empty?
    @query.nil?
  end
end
