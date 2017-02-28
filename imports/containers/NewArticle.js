import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';

export default class NewArticle extends Component {
  constructor(){
    super();
    this.state= {
      title: "",
      description: ""
    };
  }

  handleChange(e){
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSave(e){
    e.preventDefault();
    Meteor.call('saveArticle', this.state, (err, res)=> {
      if(err){
        Bert.alert({
          title:"Désolé",
          message: "Votre article n'a pas pu être enregistré",
          type: 'danger'
        });
      } else {
        Bert.alert({
          title:"bravo",
          message: "Votre article a été sauvegardé",
          type: 'success'
        });
        FlowRouter.go('/');
      }
    });
  }

  render(){
    return(
      <Form>
        <Form.Input
          name="title"
          onChange={this.handleChange.bind(this)}
          value={this.state.title}
          label='Titre'
          placeholder='Saisissez un titre...'/>
        <Form.TextArea
          name="description"
          onChange={this.handleChange.bind(this)}
          value={this.state.description}
          label='Description'
          placeholder='Contenu de votre article...'/>
        <Form.Group>
          <Form.Button onClick={this.handleSave.bind(this)} content="Enregistrer" positive />
          <Form.Button content="Annuler" negative />
        </Form.Group>
      </Form>
    );
  }
}
