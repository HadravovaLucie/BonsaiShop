import { combineReducers, createStore } from "redux";
import shopReducer from "./ShopReducer";
import {orderreducer} from "../Components/Order/OrderReducer";
import loginReducer from "./LoginReducer"

// If multiple components need access to some data, in that case we store such data in redux.
const initialState = {
    shopReducer: {
        cartItems: [],
        showCartDialog: false,
        showMenu: true,
        checkedOutItems: [],
        // loggedInUser: null
    },
    loginReducer:{
        name: "",
        pass: "",
    },
    orderreducer: {
        order_step: 0
    }
};

const rootReducer = combineReducers({
    orderreducer: orderreducer,
    loginReducer: loginReducer,
    shopReducer: shopReducer,
})

//export default createStore(rootReducer, initialState, applyMiddleware(logger));

const store = createStore(rootReducer, initialState);//createStore(rootReducer);

export default store;
