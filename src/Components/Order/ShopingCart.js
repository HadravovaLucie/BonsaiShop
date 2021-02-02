import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {bindActionCreators} from 'redux';
import {actions} from './Actions';
import Paper from '@material-ui/core/Paper';
import Person from "@material-ui/icons/PersonOutline";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import ShopingCartRow from "./ShopingCartRow";

const mapStateToProps = state => {
  return {
    checkedOutItems: state.shopReducer.checkedOutItems,
  };
};


// This component shows the items user checked out from the cart.
class ShopingCartComponent extends Component {

  onClickNext() {
    this.props.history.push('/purchase');
    this.props.actions.next_order_step(1);
    console.log("purchased");
  }

  render() {
    let totalPrice = this.props.checkedOutItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);

    return (
      <div
        style={{
          height: "100%",
          display: "flex",
        }}
      >
      <div 
        style={{  
          width: "100%",
          padding: 30,
          display: "flex",
          flexDirection: "column"
        }}>
        <Paper
            style={{
              height: "100%",
              justifyContent: "center",
              padding: 15,
            }}>
          <div style={{ fontSize: 24, marginTop: 10 }}>Košík</div>
          {/* <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: 50}}>Obrazek</TableCell>
                <TableCell>Název</TableCell>
                <TableCell>Cena</TableCell>
                <TableCell>Počet</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.checkedOutItems.map((item, index) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell><img style={{height: "50px", width: "50px"}} src={item.imageUrls} /></TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>
                      <TextField
                          type="number"
                          style={{ width: 40 }}
                          value={item.quantity}
                          onChange={e => {
                            let quantity = parseInt(e.target.value, 10);
                            if (quantity < 0) return;
                            props.dispatch(
                              updateCheckedOutItem({
                                id: item.id,
                                quantity
                              })
                            );
                          }}
                        />
                    </TableCell>
                    <TableCell><Button color="secondary" onClick={() => {props.dispatch(deleteCheckedOutItem(item.id));}}>Odebrat</Button></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table> */}

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Obrázek</TableCell>
                  <TableCell>Název</TableCell>
                  <TableCell>Cena</TableCell>
                  <TableCell>Počet</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.checkedOutItems.map((item, index) => {
                  return <ShopingCartRow item={item} key={item.id} {...this.props} />;
                })}
              </TableBody>
            </Table>

          <div
            style={{
              color: "#504F5A",
              marginLeft: 5,
              marginTop: 50,
              fontSize: 22
            }}
          >
            Celková cena: {totalPrice} Kč
          </div>
          </Paper>
          <div>
            <Button
              color="primary"
              variant="outlined"
              disabled={totalPrice === 0}
              onClick={() => {
                this.props.history.push('/order');
                this.props.actions.next_order_step(1);
                console.log("purchased");
              }}
              style={{ margin: 5, marginTop: 30, float: 'right'}}
            >
              Další
            </Button>
            <Button
              color="primary"
              variant="outlined"
              onClick={this.props.history.goBack}
              style={{ margin: 5, marginTop: 30}}
            >
              Zpet
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

const ShopingCart = withRouter(connect(mapStateToProps,mapDispatchToProps)(ShopingCartComponent));

export default ShopingCart;
