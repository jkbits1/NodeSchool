/**
 * Created by jk on 09/04/14.
 */

"use strict";

var sockets = require('websocket-stream');

var stream = sockets('ws://localhost:8000');

stream.write('hello\n');

stream.end();

