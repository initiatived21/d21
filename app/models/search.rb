class Search
  attr_reader :results, :unscoped_results, :query

  DEFAULT_NUMBER_OF_RESULTS = 12

  def initialize params
    @query = params['query']
    @offset, @limit = parse_range(params['range'])
  end

  def run
    if empty?
      @unscoped_results = Pledge
        .where(aasm_state: ['active', 'successful', 'failed'])
        .order(deadline: :desc)
    else
      @unscoped_results = PgSearch.multisearch(@query)
    end

    @results = @unscoped_results.offset(@offset).limit(@limit)
  end

  def empty?
    @query.nil? || @query.empty?
  end

  # Return a result set of original models, not PgSearch::Document
  def solved_results
    if empty?
      @results
    else
      results.map(&:searchable)
    end
  end

  private

  def parse_range(range)
    if range
      ends = range.split('..').map(&:to_i)
      [ends[0], (ends[1] - ends[0] + 1)]
    else
      [0, DEFAULT_NUMBER_OF_RESULTS]
    end
  end
end
