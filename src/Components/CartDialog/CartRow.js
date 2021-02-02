import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {
  showCartDlg,
  deleteCartItem,
  updateCartItemQnt
} from "../../Redux/Actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const CartRow = props => {
  let { item } = props;
  return (
    <TableRow>
      <TableCell><img style={{height: "50px", width: "50px"}} src={item.imageUrls} /></TableCell>
      <TableCell>
        <Link to={`/details/${item.id}`}>
              <div
                onClick={() => {
                  props.dispatch(showCartDlg(false));
                }}
              >
                {item.name}
              </div>
        </Link>
      </TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell>
          {item.quantity}
      </TableCell>
    </TableRow>
  );
};

export default CartRow;
