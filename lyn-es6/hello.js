/**
 * Created by Jon on 29/01/16.
 */

"use strict";

class Messager {
  constructor (message) {
    this.message = message;
  }

  updateMessage (message) {
    this.message = message;
  }

  relayMessage () {
    return this.message;
  }
}

var messager = new Messager("HELLO WORLD");

var msg = messager.relayMessage();

console.log(msg);
