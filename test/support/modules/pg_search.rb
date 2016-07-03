module PgSearch
  # Stubbed out because test environment doesn't understand postgres search
  def self.multisearch(query, *attrs)
    Pledge.where('content LIKE ?', "%#{query}%")
  end
end
