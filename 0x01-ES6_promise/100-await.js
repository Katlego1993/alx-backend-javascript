import { uploadPhoto, createUser } from './utils';

// Defining the async function
async function asyncUploadUser() {
  try {
    // Using Promise.allSettled to handle both promises and catch any errors
    const results = await Promise.allSettled([
      uploadPhoto(/* provide the necessary arguments */),
      createUser(/* provide the necessary arguments */),
    ]);

    // Extracting the responses or setting them to null if there was an error
    const photoResponse = results[0].status === 'fulfilled' ? results[0].value : null;
    const userResponse = results[1].status === 'fulfilled' ? results[1].value : null;

    // Returning an object with the responses
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // Handle any unexpected errors
    console.error('Error in asyncUploadUser:', error.message);
    return {
      photo: null,
      user: null,
    };
  }
}
