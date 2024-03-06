import signUpUser from './4-user-promise.js';
// Importing uploadPhoto from 5-photo-reject.js
import uploadPhoto from './5-photo-reject.js';

// Exporting the function
export function handleProfileSignup(firstName, lastName, fileName) {
  // Using Promise.allSettled to handle both promises
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then(results => {
    // Returning an array with the desired structure
    return results.map(result => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason.message,
    }));
  });
}
