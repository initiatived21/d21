Working Title: D21
=================

[![Code Climate](https://codeclimate.com/github/initiatived21/d21/badges/gpa.svg)](https://codeclimate.com/github/initiatived21/d21) [![Build Status](https://travis-ci.org/initiatived21/d21.svg?branch=develop)](https://travis-ci.org/initiatived21/d21) [![Coverage Status](https://coveralls.io/repos/initiatived21/d21/badge.svg?branch=develop&service=github)](https://coveralls.io/github/initiatived21/d21?branch=develop)


Installation
------------

You will need ruby version 2.3.1, git, npm, and bundler installed.

To install node/npm, find out the latest version (> 5) on https://nodejs.org/ , download it and
install it like so (assuming the version is 6.2.2):

  ```bash
  wget https://nodejs.org/dist/v6.2.2/node-v6.2.2-linux-x64.tar.xz
  tar -xvf node-v6.2.2-linux-x64.tar.xz
  mv node-v6.2.2-linux-x64 ~/bin
  echo 'export PATH="$HOME/bin/node-v6.2.2-linux-x64/bin:$PATH"' >> ~/.bashrc
  source ~/.bashrc
  ```

Then, `git clone` this repository to your local drive, `cd` into it, and
`bundle install`. Afterwards `npm install` as well.

Then you will also need to `rake db:create` and `rake db:migrate` to get the
database up and running. You can `rake db:seed` to load some initial testing
data.

The rails server is started via `npm run rails-server`

Testing
-------

To run the test suite, simply type in `rake`.
The server-side test suite is located in the `/test/` directory. Most client-
side code can be found in `/client/`, including javascript tests. The JS
test suite is run after a successful run of the server-side test suite, as well
as a couple of additional checks: brakeman, rails-best-practices, and rubocop.

We use Selenium for the JavaScript enabled Ruby tests. For this, Firefox needs to
be installed on your system. Due to API changes in Firefox 48, the tests will only
work with a version of Firefox <= 47. Please downgrade your Firefox
browser if you are using Firefox >= 48 at the moment.

To just run the frontend tests, change into the `/client` directory and type
`npm test`. To run the JavaScript linter, type `npm run test:lint`.

---

A ruby translation project managed on [Locale](http://www.localeapp.com/) that's open to all!

## Contributing to d21

- Edit the translations directly on the [d21](http://www.localeapp.com/projects/public?search=d21) project on Locale.
- **That's it!**
- The maintainer will then pull translations from the Locale project and push to Github.

Happy translating!
