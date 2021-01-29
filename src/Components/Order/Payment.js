import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {actions} from './Actions';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import cellRenderPayment from './cellRenderPayment.js';

const mapStateToProps = state => {
  return {
    checkedOutItems: state.shopReducer.checkedOutItems
  };
};

// This component shows the items user checked out from the cart.
class PaymentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      rowSelection: 'single',
      phone:'',
      rowData: [
          { place_image: 1, place: "hotovost" ,price: "0 Kč", time: "hned" },
          { place_image: 2, place: "fdsfdsf" ,price: "50 Kč", time: "do 2 dnu" },
      ],
      columnDefs:  [
        {   
            field: 'place_image',
            sortable: true, 
            cellRenderer: 'cubeRenderer',
            width: 37,
            cellStyle: {color: 'red', 'padding': 0 }
        },
        {field: 'place',sortable: true,  cellStyle: function(params) { return {'font-size': '22px' };} },
        {field: 'price', sortable: true  },
        {field: 'time',  sortable: true  },
      ],
      frameworkComponents: {
        cubeRenderer: cellRenderPayment,
      },
      isSelected: false,
    };
  };

   onRowSelected = (event) => {
    if (event.node.isSelected() == true) 
    return this.setState({ isSelected: true });
    ;
  };

  onSelectionChanged = (event) => {
    var rowCount = event.api.getSelectedNodes().length;
    // window.alert('selection changed, ' + rowCount + ' rows selected');
      
  };

  onGridReady(params) {
      params.api.sizeColumnsToFit();
  };

  render() {
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
          <div
            style={{
              justifyContent: "center",
              padding: 15,
            }}>
            <h1>Způsob dopravy</h1>
            <div className="ag-theme-alpine" style={ { height: 200, width: 600 } }>  
              <AgGridReact 
                headerHeight = {0}
                columnDefs={this.state.columnDefs}
                rowSelection={this.state.rowSelection}
                rowData={this.state.rowData}
                frameworkComponents={this.state.frameworkComponents}
                onRowSelected={this.onRowSelected.bind(this)}
                onSelectionChanged={this.onSelectionChanged.bind(this)}
                // events
                onGridReady={this.onGridReady}
              />
            </div>
          </div>
          </Paper> 
          <div>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                //this.props.history.push('/purchase');
                this.props.actions.next_order_step(1);
                console.log("purchased");
              }}
              style={{ margin: 5, marginTop: 30 }}
            >
              Zpět
            </Button>

            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                //this.props.history.push('/purchase');
                this.props.actions.next_order_step(3);
                console.log("purchased");
              }}
              style={{ margin: 5, marginTop: 30, float: 'right'}}
            >
              Další
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

const Payment = withRouter(connect(mapStateToProps,mapDispatchToProps)(PaymentComponent));

export default Payment;