import { load, createUser, fireError } from '../actionType';

export const loadUser = (payload) => ({
  type: load,
  payload,
});
export const setUser = (payload) => ({
  type: createUser,
  payload,
});
export const setError = (payload) => ({
  type: fireError,
  payload,
});
