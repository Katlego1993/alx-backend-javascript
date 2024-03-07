import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    // Verify the types of attributes
    if (typeof amount !== 'number' || !(currency instanceof Currency)) {
      throw new Error('Invalid attribute types');
    }

    // Store attributes with underscores
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and setter for the 'amount' attribute
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new Error('Invalid type for amount');
    }
    this._amount = newAmount;
  }

  // Getter and setter for the 'currency' attribute
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new Error('Invalid type for currency');
    }
    this._currency = newCurrency;
  }

  // Method to display full price information
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price based on conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error('Invalid argument types');
    }

    return amount * conversionRate;
  }
}
