Working Title: D21
=================

[![Code Climate](https://codeclimate.com/github/initiatived21/d21/badges/gpa.svg)](https://codeclimate.com/github/initiatived21/d21) [![Build Status](https://travis-ci.org/initiatived21/d21.svg?branch=develop)](https://travis-ci.org/initiatived21/d21) [![Coverage Status](https://coveralls.io/repos/initiatived21/d21/badge.svg?branch=develop&service=github)](https://coveralls.io/github/initiatived21/d21?branch=develop)


Installation
------------

You will need ruby version 2.3.0, git, npm, and bundler installed.

`git clone` this repository to your local drive, `cd` into it, and
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

---

A ruby translation project managed on [Locale](http://www.localeapp.com/) that's open to all!

## Contributing to d21

- Edit the translations directly on the [d21](http://www.localeapp.com/projects/public?search=d21) project on Locale.
- **That's it!**
- The maintainer will then pull translations from the Locale project and push to Github.

Happy translating!
