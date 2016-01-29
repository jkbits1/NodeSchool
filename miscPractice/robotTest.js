/**
 * Created by jk on 06/06/15.
 */

(function () {

  function Robot() {
    this.parts = [];
  }

  Robot.prototype.capabilities = [];

  var robby = new Robot();
  var cranky = new Robot();

  robby.parts.push('core');
  robby.capabilities.push('fly');
})();
