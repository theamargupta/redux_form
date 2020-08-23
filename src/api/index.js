import { auth } from '../firebase';
export const createUser = async ({ email, password, name }) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    const response = await auth.currentUser.updateProfile({
      displayName: name,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
