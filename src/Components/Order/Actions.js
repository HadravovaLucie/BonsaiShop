import {types} from './OrderTypes'

export const actions = {
  next_order_step(order_step) {
    return {
      type: types.NEXT_ORDER_STEP,
      payload: {order_step}
    };
  }
};