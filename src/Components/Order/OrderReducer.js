import {types} from './OrderTypes'


export function orderreducer(state = {}, action) {
    const payload = action.payload;
    switch (action.type) {
      case types.NEXT_ORDER_STEP:
        console.log('NEXT_ORDER_STEP',payload)
        return {
            ...state,
            order_step: payload.order_step,   
        };
      default:
        return state;
    }
  }
  