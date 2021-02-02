import { userConstants } from '../Constants/UserConstants';

const initialState = {
  user: {
    username: '',
    password: '',
    phone: '',
    email: '',
  },
  formSubmitted: false
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {

    case userConstants.DELETE:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };

    case userConstants.REGISTER:
      console.log('register = ', action.payload)
      return { 
        registering: true,
        user: action.payload 
      };

    case userConstants.LOGIN:
      console.log('user = ', action.payload)
      return {
        loggingIn: true,
        user: action.payload
      };

    case userConstants.LOGOUT:
      return {};

    default:
      return state
  }
}

export default UserReducer;