export default function divideFunction(numerator, denominator) {
  // Check if the denominator is equal to 0
  if (denominator === 0) {
    // Throw an error with the specified message
    throw new Error('Cannot divide by 0');
  }

  // Return the result of the division
  return numerator / denominator;
}
