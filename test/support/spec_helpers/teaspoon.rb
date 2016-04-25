ENV['TEASPOON_ENV'] = 'test/teaspoon_env.rb'
def teaspoon
  puts "\n\n[Teaspoon] Javascript Tests:\n".underline
  output = %x( bundle exec rails teaspoon )
  puts output
end
