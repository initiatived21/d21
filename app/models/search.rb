class Search
  attr_reader :results, :unscoped_results, :query, :filter

  DEFAULT_NUMBER_OF_RESULTS = 12
  DEFAULT_FILTER = ['active', 'successful', 'failed']
  ALLOWED_FILTERS = ['active', 'successful', 'failed']

  def initialize params
    @query = params['query']
    @filter = set_filter(params['filter'])
    @offset, @limit = parse_range(params['range'])
  end

  def run
    if empty?
      @unscoped_results = Pledge
        .where(aasm_state: @filter ? @filter : DEFAULT_FILTER)
        .order(created_at: :desc, id: :asc)
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

  def set_filter(filter_param)
    if filter_param && ALLOWED_FILTERS.include?(filter_param)
      @filter = filter_param
    end
  end
end
