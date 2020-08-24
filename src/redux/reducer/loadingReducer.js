import { SignIn, SignUp, createUser, fireError } from '../actionType';
const loadingReducer = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case SignIn:
      return true;
    case SignUp:
      return true;
    case createUser:
      return false;
    case fireError:
      return false;
    default:
      return state;
  }
};
export default loadingReducer;
