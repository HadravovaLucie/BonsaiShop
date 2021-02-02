import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import ProductList from "./Components/ProductList/ProductList";
import { Switch, Route } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import CartDialog from "./Components/CartDialog/CartDialog";
import Details from "./Components/Details/Details";
import Login from "./Components/LoginRegister/Login/Login";
import Register from "./Components/LoginRegister/Register/Register";
import PaymentInfo from "./Components/Footer/PaymentInfo/PaymentInfo";
import DeliveryInfo from "./Components/Footer/DeliveryInfo/DeliveryInfo";
import CompanyInfo from "./Components/Footer/CompanyInfo/CompanyInfo";
import ContactsInfo from "./Components/Footer/Contacts/Contacts";
// import PurchaseInfo from "./Components/Order/Order";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Footer from "./Components/Footer/Footer";
import Order from "./Components/Order/Order";
import Paper from '@material-ui/core/Paper';

class App extends Component {
  render() {
    return ( 
      <div className="app">
        <Paper className="app-paper">
          <Header />
            <div className="app-body">  
              <Menu />
              <div className="content">
                <CartDialog />
                <Switch>
                  <Route path="/" exact component={ProductList} />
                  <Route path="/details/:id" component={Details} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/payment" component={PaymentInfo} />
                  <Route path="/delivery" component={DeliveryInfo} />
                  <Route path="/info" component={CompanyInfo} />
                  <Route path="/contacts" component={ContactsInfo} />
                  {/* <Route path="/purchase" component={PurchaseInfo} /> */}
                  <Route path="/order" component={Order} />
                  <Route
                    component={() => (
                      <div style={{ padding: 20 }}>Page not found</div>
                    )}
                  />
                </Switch>
              </div>
            </div>
          <Footer />
        </Paper>
      </div>
    );
  }
}

export default App;
