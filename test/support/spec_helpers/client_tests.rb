ENV['TEASPOON_ENV'] = 'test/teaspoon_env.rb'
def client_tests
  puts "\n\n[NPM] Javascript Tests:\n".underline
  output = %x( cd client && npm test )
  puts output
end
