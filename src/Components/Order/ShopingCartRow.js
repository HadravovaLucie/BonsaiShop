import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {
  showCartDlg,
  deleteCheckedOutItem,
  updateCheckedOutItem
} from "../../Redux/Actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const ShopingCartRow = props => {
  let { item } = props;
  return (
    <TableRow>
      <TableCell><img style={{height: "50px", width: "50px"}} src={item.imageUrls} /></TableCell>
      <TableCell>
        <Link to={`/details/${item.id}`}>
              <div
                onClick={() => {
                  this.props.dispatch(showCartDlg(false));
                }}
              >
                {item.name}
              </div>
        </Link>
      </TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell>
         <TextField
          type="number"
          style={{ width: 40 }}
          value={item.quantity}
          onChange={e => {
            let quantity = parseInt(e.target.value, 10);
            if (quantity < 0) return;
            // props.dispatch(
            //   updateCheckedOutItem({
            //     id: item.id,
            //     quantity
            //   })
            // );
          }}
        /> 
      </TableCell>
      <TableCell>
        <Button color="secondary" onClick={() => {props.dispatch(deleteCheckedOutItem(item.id));}}>Odebrat</Button>
      </TableCell> 
    </TableRow>
  );
};

export default ShopingCartRow;
