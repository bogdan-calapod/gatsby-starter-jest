# Gatsby Starter Template + Jest & Sass

Built using [Gatsby](http://gatsbyjs.org)
[Gatsby documentation available here](https://www.gatsbyjs.org/docs/)

A simple starter template for Gatsby, with Jest, Sass, Google Analytics & Hotjar
baked in.

Also includes:
* .eslint.rc config using standard.js
* Mock for Jest styles (so that styles imports don't break your tests)
* Example wercker config with test, build, deploy (using SCP) and Slack notification configs

## Configuring Wercker

Wercker is a CI platform very useful for small projects. In order to use the `.yml` file in this repo, you will need to link your repo with Wercker, and create three build steps: `test`, `build` and `deploy`.

To configure wercker deployment, you need to replace the following:
* HOST (line 46 and 58) with the host you're deploying to
* USER (line 46) with your SSH user
* DEPLOYPATH (line 46) with the path you want your deployed files to go to (usually `/var/www/`)

Follow the instructions at [the official wercker documentation](http://blog.wercker.com/simplifying-ssh-based-deployment-with-wercker) on how to set up your public/private key. The gist of it is:
* Create a deploy rule in wercker
* Place wercker's public key in your server's `authorized_keys` file

## Configuring Analytics and Hotjar

To configure Google Analytics and Hotjar, insert your Google Analytics Tracking ID and Hotjar script version and ID into `gatsby-config.js`.

## Writing tests

The Jest runner is configured to look for all files named `*.test.js` and run all the tests in them. I recommend placing the test file in the same folder with the component it's testing.

To run tests use `yarn test`, and `yarn test-coverage` if you want a coverage report as well.


## Installing
* `yarn` && `yarn develop` to develop
* `yarn test` to run tests

## Deploying
* `yarn build` and deploy contents of `public` folder
