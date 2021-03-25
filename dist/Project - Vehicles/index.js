"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = require("./car");
var Motorcycle = require("./motorcycle");
var car = new Car(4);
var bike = new Motorcycle(2);
car.soundHorn();
bike.soundHorn();
