import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { register, _delete } from '../Actions/UserActions';

class ConnectedLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: '',
        email: '',
        phone: '',
      },
      submitted: false
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
            Register{" "}
          </div>
          <div>
            <TextField
              value={user.username} 
              name="username"
              type="username"
              placeholder="User name"
              onChange={this.handleChange}
            />
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
          <div>
            <TextField
              value={user.email} 
              name="email" 
              type="email"
              placeholder="E-mail"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <TextField
              value={user.phone} 
              name="phone" 
              type="phone"
              placeholder="Phone"
              onChange={this.handleChange}
            />
          </div>
          <Button
            style={{ marginTop: 20, width: 200 }}
            variant="outlined"
            color="primary"
            onClick={() => {
              this.submitForm;
              this.props.dispatch(register( this.state.user ))
              this.props.history.goBack()
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