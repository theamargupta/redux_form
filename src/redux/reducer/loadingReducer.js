import { load, createUser, fireError } from '../actionType';
const loadingReducer = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case load:
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
