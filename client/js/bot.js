define(['captain'], function(Captain) {
  var Bot = Captain.extend({
    tick: function() {
      if (this.aggressive) {
        this.attackTarget();
      } else {
        this.followTarget();
      }
    },

    onDestroy: function() {
      console.log(this.name + ": I am undone!");
    },

    attackTarget: function() {
      this.turnToTarget();
      this.fireWeapon();
      this.accelerate();
    },

    followTarget: function() {
      this.turnToTarget();
      this.accelerate();
    }
  });

  return Bot;
});