import React, { Component } from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { connect } from "react-redux";
import Basket from "../ShopingCart/ShpoingCart"


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

  

class OrderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        valueTab : 0,
    }
  }  

  handleChange = (event, valueTab) => {
    this.setState({ valueTab });
  };


  render() {
      const { valueTab } = this.state;
      return (
          
          <div>
              <AppBar position="static">
                        <Tabs value={valueTab} onChange={this.handleChange}>
                         <Tab label="Košík" />
                         <Tab label="Doprava" />
                         <Tab label="Platba" />
                         <Tab label="Osobní údaje" />
                         <Tab label="Hotovo" />
                        </Tabs>
                      </AppBar> 
                      {valueTab === 0 && <TabContainer>
                         <Basket/>   
                        </TabContainer>}
                      {valueTab === 1 && <TabContainer>
                            
                        </TabContainer>}
                      {valueTab === 2 && <TabContainer>
                          
                      </TabContainer>}
                      {valueTab === 3 && <TabContainer>
                          
                      </TabContainer>}
                      {valueTab === 4 && <TabContainer>
                      
                      </TabContainer>}
          </div>
              


          
      );
  }
}

const mapStateToProps = state => {
  return {
    checkedOutItems: state.shopReducer.checkedOutItems
  };
};

const Order = connect(mapStateToProps)(OrderComponent);

export default (Order);