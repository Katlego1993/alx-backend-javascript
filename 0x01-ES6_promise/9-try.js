export default function guardrail(mathFunction) {
  // Create an array named queue
  const queue = [];

  try {
    // Execute the mathFunction and append its result to the queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // If an error occurs, append the error message to the queue
    queue.push(error.message);
  } finally {
    // Append the message "Guardrail was processed" to the queue
    queue.push('Guardrail was processed');
  }
