import Car = require('./car');
import Motorcycle = require('./motorcycle');

const car = new Car(4);
const bike = new Motorcycle(2);

car.soundHorn();
bike.soundHorn();