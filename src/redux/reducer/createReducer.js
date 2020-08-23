import { createUser } from '../actionType';

const createReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case createUser:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export default createReducer;
