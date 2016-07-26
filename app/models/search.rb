class Search
  attr_reader :results, :unscoped_results, :query

  def initialize params
    @query = params['query']
    @offset, @limit = parse_range(params['range'])
  end

  def run
    @unscoped_results = PgSearch.multisearch(@query)
    @results = @unscoped_results.offset(@offset).limit(@limit)
  end

  def empty?
    @query.nil? || @query.empty?
  end

  private

  def parse_range(range)
    if range
      ends = range.split('..').map(&:to_i)
      [ends[0], (ends[1] - ends[0] + 1)]
    else
      [0, 1]
    end
  end
end
