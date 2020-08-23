import { createUser, fireError } from '../actionType';

const errorReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case fireError:
      return payload;
    case createUser:
      return null;
    default:
      return state;
  }
};
export default errorReducer;
