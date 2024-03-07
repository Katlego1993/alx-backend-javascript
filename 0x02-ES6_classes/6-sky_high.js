import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the constructor of the parent class
    // Verify the type of attribute
    if (typeof floors !== 'number') {
      throw new Error('Invalid attribute type for floors');
    }
    // Store attributes with underscores
    this._floors = floors;
  }

  // Getter for the 'floors' attribute
  get floors() {
    return this._floors;
  }

  // Override the method from the parent class
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
