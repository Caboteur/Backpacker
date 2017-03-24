import React, {Component} from 'react';
import {Form, Button } from 'semantic-ui-react';

import UserInfo from '../API/UserInfo.js'

export default class LoginForm extends Component {

  constructor(){
    super();
    this.state={
      email: "",
      pass: "",
      loggedin: Meteor.userId()
    };
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    Meteor.loginWithPassword(this.state.email, this.state.pass, (err) => {
      if(err){
        Bert.alert({
          message: err.reason,
          type:'danger'
        });
      } else {
        Bert.alert({
          message: "Vous êtes connecté",
          type: 'success'
        });
        FlowRouter.go('/');
      }
    });
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Input
          name="email"
          onChange={this.handleChange.bind(this)}
          value={this.state.email}
          label="Email"
          placeholder="mon@mail.com" />
        <Form.Input
          name="pass"
          onChange={this.handleChange.bind(this)}
          value={this.state.pass}
          label="password"
          type="password" />
        <Button>Connexion</Button>
      </Form>
    );
  }
}
