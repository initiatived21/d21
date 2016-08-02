module PgSearch
  # Stubbed out because test environment doesn't understand postgres search
  def self.multisearch(query, *attrs)
    PgSearch::Document.where('content LIKE ?', "%#{query}%")
  end
end
