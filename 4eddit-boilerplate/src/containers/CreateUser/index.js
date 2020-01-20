import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import styled from "styled-components";
import { routes } from "../Router/index";
import { connect } from "react-redux";
import { push } from "connected-react-router";

const LoginWrapper = styled.form`
 display: flex;
 flex-direction: column;
`;


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { email, password, username } = this.state;

    return (
      <LoginWrapper>
      
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
        />
        
        <TextField 
         onChange={this.handleFieldChange}
         name="username"
         type="text"
         label="Usuário"
         value={username}
        />

        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <Button>Cadastrar</Button>
        
      </LoginWrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
    
  };
}

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);