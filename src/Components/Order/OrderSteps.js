import { Step } from "@material-ui/core";
import React from "react";
import ShopingCart from './ShopingCart'
import Delivery from './Delivery'
import Payment from './Payment'
import PersonalForm from './PersonalForm'

const OrderSteps = props => {
  let { step } = props;
  switch (step) {
    case 0:
      return <ShopingCart/>;
      break;
    case 1:
      return <Delivery/>;
      break;
    case 2:
      return <Payment/>;
      break;
    case 3:
      return <PersonalForm/>;
      break;
    case 4:
      return <div>Hotovo</div>;
      break;
    default:
      return null;
  }
};
export default OrderSteps;