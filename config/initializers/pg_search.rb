PgSearch.multisearch_options = {
  using: {
    tsearch: {
      prefix: true,
      dictionary: 'simple'
    },
    trigram: {}
  }
}
