import * as CONSTANTS from "./Constants";

const loginReducer = (state = {}, action) => {
  switch (action.type) {



    case CONSTANTS.SET_LOGGED_IN_USER:
      return { 
          ...state, name: state.name.concat(action.payload), pass: state.pass.concat(action.payload) 
        };
        
    case CONSTANTS.LOGOUT:
      return { ...state, name: "", pass: "", checkedOutItems: [] };

    default:
      return state;
  }
};

export default loginReducer;
