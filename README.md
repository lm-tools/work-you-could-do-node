# work-you-could-do - deprecated

*This project is no longer maintained and is superseded by Nation Career Service*

[![Build status][build status image]][ci]

A hello world app, based on [express], which looks like [gov.uk]

[![Deploy][heroku deploy image]][heroku deploy hook]

## Dev setup

Use node 6.11.1 and npm >5. Setup with [nvm](https://github.com/creationix/nvm):

```sh
$ nvm install 6.11.1
$ npm install -g npm@5.2.0
``` 

Ensure `node_modules/.bin` is on your path

Make sure that [PostgreSQL] is running, and that your current user (`$ whoami`)
has full access. Alternatively, custom database details can be provided by setting
a `DATABASE_URL` environment variable to a valid [PostgreSQL connection string]

Setup the application:

```sh
$ psql -c "create database work_you_could_do;"
$ psql -c "create database work_you_could_do_test;"
$ npm install
$ npm run watch
```

## Mounting the application in a directory

The app will run mounted at `/` by default. To run within a directory, set the
`EXPRESS_BASE_PATH` environment variable.

For example, to mount the application at `/work-you-could-do`, run:

```sh
$ EXPRESS_BASE_PATH=/work-you-could-do npm run start
```

## Test user creation

You can create user and then fetch all the users by executing below commands

    $ curl -X POST http://localhost:3000/users -d '{"name":"some name","surname":"some surname123"}' -H "Content-Type: application/json"
    $ curl http://localhost:3000/users

[build status image]: https://api.travis-ci.org/lm-tools/work-you-could-do-node.svg
[ci]: https://travis-ci.org/lm-tools/work-you-could-do-node
[express]: http://expressjs.com/
[gov.uk]: https://www.gov.uk/
[heroku deploy image]: https://www.herokucdn.com/deploy/button.svg
[heroku deploy hook]: https://heroku.com/deploy
