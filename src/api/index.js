import { auth } from '../firebase';
export const createUser = async ({ email, password, name }) => {
  const response = await auth.createUserWithEmailAndPassword(email, password);
  await auth.currentUser.updateProfile({
    displayName: name,
  });
  return response.user;
};
export const SigniInUser = async ({ email, password }) => {
  const response = await auth.signInWithEmailAndPassword(email, password);
  console.log(response);
  return response.user;
};
