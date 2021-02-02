import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { setLoggedInUser } from "../../../Redux/Actions";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { login, logout, _delete } from '../Actions/UserActions';
import { Link } from 'react-router-dom';

class ConnectedLogin extends Component {
  constructor(props) {
    super(props);
      this.state = {
        user: {
          username: '',
          password: '',
        },
        submitted: false,
      }
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
        user: {
            ...user,
            [name]: value
        }
    });
}

handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.firstName && user.lastName && user.username && user.password) {
        this.props.register(user);
    }
}

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    const { user, submitted } = this.state;

    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            height: 300,
            width: 200,
            padding: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Avatar style={{ marginBottom: 10 }}>
            <LockOutlinedIcon />
          </Avatar>
          <div
            style={{
              marginBottom: 20,
              fontSize: 24,
              textAlign: "center"
            }}
          >
            {" "}
            Log in{" "}
          </div>
          <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
            <TextField
              value={user.username} 
              name="username"
              placeholder="User name"
              onChange={this.handleChange}
            />
            {submitted && !user.username &&
                <div className="help-block">Username is required</div>
            }
          </div>
          <div>
            <TextField
              value={user.password} 
              name="password" 
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>  
          <Button
            style={{ marginTop: 20, width: 200 }}
            variant="outlined"
            color="primary"
            onClick={() => {
              this.handleSubmit
              this.props.dispatch(login( this.state.user ))
              this.props.history.goBack(-2)
            }}
          >
            Přihlášení
          </Button>
          {this.state.wrongCred && (
            <div style={{ color: "red" }}>Wrong username and/or password</div>
          )}
        </div>
      </div>
    );
  }
}

const Login = withRouter(connect()(ConnectedLogin));

export default Login;