import { userConstants } from '../Constants/UserConstants';

export const login = user => ({
    type: userConstants.LOGIN,
    payload: user
  });

export const logout = user => ({
    type: userConstants.LOGOUT,
    payload: user
});

export const register = user => ({
    type: userConstants.REGISTER,
    payload: user
  });

export const _delete = id => ({
    type: userConstants.DELETE,
    payload: id
  });