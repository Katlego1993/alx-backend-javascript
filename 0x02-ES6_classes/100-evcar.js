import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent class constructor
    super(brand, motor, color);

    // Verify the type of the 'range' attribute
    if (typeof range !== 'string') {
      throw new Error('Invalid attribute type for range');
    }

    // Store attributes with underscores
    this._range = range;
  }

  // Getter for the 'range' attribute
  get range() {
    return this._range;
  }

  // Override the cloneCar method
  cloneCar() {
    // Create a new instance of the Car class with the same attribute values
    const clonedCar = new Car(this._brand, this._motor, this._color);

    // Attach a symbol to the cloned car instance to indicate it's a clone
    clonedCar[Car.cloneKey] = true;

    return clonedCar;
  }
}
