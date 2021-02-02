import * as CONSTANTS from "./Constants";

// If multiple components need access to some data, in that case we store such data in redux.
/*const initialState = {
  cartItems: [],
  showCartDialog: false,
  showMenu: true,
  checkedOutItems: [],
  loggedInUser: null
};*/

const shopReducer = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_ITEM_IN_CART: {
      console.log('shopReducer = ',action.payload)
      let index = state.cartItems.findIndex(x => x.id === action.payload.id);
      // Is the item user wants to add already in the cart?
      if (index !== -1) {
        //let cloneCartItems1 = [...state.cartItems[index]]
        //console.log('shopReducer = ',cloneCartItems1)
      
        // Yes, update the quantity.
        let cloneCartItems = [...state.checkedOutItems];
        cloneCartItems[index] = {
          ...cloneCartItems[index],
          quantity: state.checkedOutItems[index].quantity + action.payload.quantity
        };
        let tmpcartItems = []
        tmpcartItems = tmpcartItems.concat(action.payload)

        return { ...state, checkedOutItems: cloneCartItems,
                           cartItems: tmpcartItems
        };
      }
      let tmpcartItems = []
      tmpcartItems = tmpcartItems.concat(action.payload)
      console.log('shopReducer = ',tmpcartItems)
      // No, add a new item.
      return { ...state, 
          checkedOutItems: state.checkedOutItems.concat(action.payload),
          cartItems: tmpcartItems
        };
    }
    case CONSTANTS.SHOW_CART_DLG:
      return { ...state, showCartDialog: action.payload };

    case CONSTANTS.DELETE_CHECKEDOUT_ITEM:
      return {
        ...state,
        checkedOutItems: state.checkedOutItems.filter(x => x.id !== action.payload)
      };

    case CONSTANTS.TOGGLE_MENU:
      return { ...state, showMenu: !state.showMenu };

    // case CONSTANTS.SET_LOGGED_IN_USER:
    //   return { ...state, loggedInUser: action.payload };
    // case CONSTANTS.LOGOUT:
    //   return { ...state, loggedInUser: null, checkedOutItems: [] };
    
    case CONSTANTS.SET_CHECKEDOUT_ITEMS:
      return { ...state, checkedOutItems: action.payload };
    case CONSTANTS.UPDATE_CHECKEDOUT_ITEM_QUANTITY: {
      let index = state.checkedOutItems.findIndex(x => x.id === action.payload.id);

      // User wants to update quantity of existing item.
      if (index !== -1) {
        let cloneCartItems = [...state.cartItems];
        cloneCartItems[index] = {
          ...cloneCartItems[index],
          quantity: action.payload.quantity
        };

        return { ...state, cartItems: cloneCartItems };
      }

      // If we couldn't find such item, do nothing.
      return state;
    }
    default:
      return state;
  }
};

export default shopReducer;
