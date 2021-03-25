"use strict";

var Vehicle =
/** @class */
function () {
  function Vehicle(whls) {
    this.numberOfWheels = whls;
  }

  Vehicle.prototype.soundHorn = function () {
    console.log('Beep!');
  }; // Getter - Setter


  Vehicle.prototype.getNumberOfWheels = function () {
    return this.numberOfWheels;
  };

  Vehicle.prototype.setNumberOfWheels = function (nwheels) {
    this.numberOfWheels = nwheels;
  };

  return Vehicle;
}();

module.exports = Vehicle;