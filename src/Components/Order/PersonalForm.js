import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {actions} from './Actions';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Person from "@material-ui/icons/PersonOutline";
import { setLoggedInUser } from "../../Redux/Actions";

const mapStateToProps = state => {
  return {
    checkedOutItems: state.shopReducer.checkedOutItems,
  };
};

// This component shows the items user checked out from the cart.
class PersonalFormComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      name: '' ,
      password: '' ,
      showPassword: false,
      email:'',
      phone:'',
    };
  }

render() { 

  const handleChangeUsername = (event) => {
    this.setState({name: event.target.value});
  };

  const handleChangePassword = (event) => {
    this.setState({pass: event.target.value});
  };

  const handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
  };

  const handleChangePhone = (event) => {
    this.setState({phone: event.target.value});
  };
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }; 

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
          }}
        >
          <Paper
            style={{
              height: "100%",
              justifyContent: "center",
            }}>

            {!this.props.loggedInUser ? (
              <Button
                variant="outlined"
                style={{ marginRight: 10 }}
                color="primary"
                onClick={() => {
                  this.props.history.push("/login");
                }}
              >
                Přihlášení
              </Button>
            ) : (
              <Avatar
                onClick={event => {
                  this.setState({ anchorEl: event.currentTarget });
                }}
                style={{ backgroundColor: "#3f51b5", marginRight: 10 }}
              >
                <Person />
              </Avatar>
            )}

            <FormControl style={{margin: 20, width: "95%"}}>
              <InputLabel htmlFor="filled-adornment-amount">User Name</InputLabel>
              <FilledInput
                type='text'
                onChange={this.handleChangeUsername}
              />
            </FormControl>
            
            <FormControl style={{margin: 20, width: "95%"}}>
              <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
              <FilledInput
                type='text'
                onChange={this.handleChangePassword}
                type={this.state.showPassword ? 'text' : 'password'}

              //   endAdornment={
              //     <InputAdornment position="end">
              //   <IconButton
              //     aria-label="toggle password visibility"
              //     onClick={handleClickShowPassword}
              //     onMouseDown={handleMouseDownPassword}
              //   >
              //     {values.showPassword ? <Visibility /> : <VisibilityOff />}
              //   </IconButton>
              // </InputAdornment>
              //   }
              
              />
            </FormControl>

            <FormControl style={{margin: 20, width: "95%"}}>
              <InputLabel htmlFor="filled-adornment-amount">E-mail</InputLabel>
              <FilledInput
                type='text'
                onChange={this.handleChangeEmail}
              />
            </FormControl>

            <FormControl style={{margin: 20, width: "95%"}}>
              <InputLabel htmlFor="filled-adornment-amount">Phone</InputLabel>
              <FilledInput
                type='text'
                onChange={this.handleChangePhone}
              />
            </FormControl>
            </Paper>

          <div>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                //this.props.history.push('/purchase');
                this.props.actions.next_order_step(2);
                console.log("purchased");
              }}
              style={{ margin: 5, marginTop: 30 }}
            >
              Zpět
            </Button>

            <Button
              color="primary"
              variant="outlined"
              // disabled={totalPrice === 0}
              onClick={() => {
                //this.props.history.push('/purchase');
                this.props.actions.next_order_step(4);
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

const PersonalForm = withRouter(connect(mapStateToProps,mapDispatchToProps)(PersonalFormComponent));

export default PersonalForm;