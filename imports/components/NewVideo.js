import React, {Component} from 'react';
import {Form, Segment} from 'semantic-ui-react';
import {markdown} from 'markdown';
import moment from 'moment';


export default class NewVideo extends Component {
  constructor(){
    super();
    this.state= {
     filename:''
    };
  }



  handleChange(e){
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });

    console.log(this.state)
  }

  handleCancel(e){
    e.preventDefault();
    FlowRouter.go('/');
  }

  handleSave(e){
    e.preventDefault();
    Meteor.call('saveVideo', this.state, (err, res)=> {
      if(err){
        Bert.alert({
          title:"Désolé",
          message: err.error,
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
      <div>
        <h1>Nouvelle Vidéo</h1>
      <Form>
        <Form.Input
          name="title"
          onChange={this.handleChange.bind(this)}
          value={this.state.title}
          label='Video'
          placeholder='Saisissez une url ...'/>
      <Form.Button onClick={this.handleSave.bind(this)} content="Enregistrer" positive />


      </Form>

      </div>
    );
  }
}
