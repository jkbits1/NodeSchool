/**
 * Created by jk on 05/11/15.
 */

var hapi = require('hapi');
var authBasic = require('hapi-auth-basic');

var port = +(process.argv[2]);
var server = new hapi.Server();

const users = {
  hapi: {
    username: 'hapi',
    password: 'auth'
  }
};

server.connection({
  host: 'localhost',
  port: port
});

server.register(authBasic, (err) => {
  if (err) {
    throw err;
  }
});

server.auth.strategy('simple', 'basic',
  {
    validateFunc: validate
  }
);

function validate(req, username, password, cb) {
  const user = users[username];

  if (!user) {
    return cb(null, false);
  }

  if (password === user.password) {
    return cb(null, true, {id: user.id});
  }

  //return cb(null, false);
  return cb(null, false, {id: 0});
}

server.route({
  method: 'GET',
  path: '/',
  config: {
    auth: 'simple',
    handler: function (req, reply) {

      // NOTE: only authenticated requests arrive
      if (req.auth.isAuthenticated) {
        return reply("hello");
      }

      // see above note - this code is never executed
      return reply(401);
    }
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }
});
