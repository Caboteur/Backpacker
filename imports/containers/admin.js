import React, {Component} from 'react';
import {Button, Form, Segment, Icon, Checkbox } from 'semantic-ui-react';
import NewProfiles from '../components/NewProfiles.js';
import NewArticles from '../components/NewArticles.js';
import NewVideo from '../components/NewVideo.js';

export default class Admin extends Component {

constructor (){
   super();
   this.state={
    pics:'/image/' + "",


   }
}



  handleChange(e){
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleCancel(e){
    e.preventDefault();

  }

  ChangePageSlide () {
    FlowRouter.go("/Slide");
  }

  ChangePageActu () {
    FlowRouter.go("/MainActualites");
  }

  ChangePageVideo () {
    FlowRouter.go("/MainVideo");
  }

  ChangePageProfile () {
    FlowRouter.go("/Fiche");
  }

  handleSave(e){
    e.preventDefault();
    Meteor.call('savePics', this.state, (err, res)=> {
      if(err){
        Bert.alert({
          title:"Désolé",
          message: err.error,
          type: 'danger'
        });
      } else {
        Bert.alert({
          title:"bravo",
          message: "Votre imagesa été sauvegardé",
          type: 'success'
        });
      }
    });
  }


  render(){

    return(
      <div style={{width:'80%', margin:'auto'}}>

     <NewProfiles  />
      <Button  style={{marginTop:'15px'}} size="mini"color="yellow" content="Gerer fiche technique" onClick={this.ChangePageProfile.bind(this)} />
     <NewArticles />
     <Button  style={{marginTop:'15px'}} size="mini"color="yellow" content="Gerer mes articles " onClick={this.ChangePageActu.bind(this)} />
     <NewVideo />
     <Button  style={{marginTop:'15px'}} size="mini"color="yellow" content="Gerer mes videos" onClick={this.ChangePageVideo.bind(this)} />
     <div style={{width:'80%', margin:'auto'}}>
     <h1>Nouvelle image</h1>
     <form>
   <input type="file" id="userimage" name="userimage"/>
   <button type="submit" >Upload</button>
</form>
     <Form.Input
       name="pics"
       onChange={this.handleChange.bind(this)}
       value={this.state.pics}
       label='pics'
       placeholder='/image/persona.jpg'/>
         <Form.Button style={{marginTop:'15px'}} onClick={this.handleSave.bind(this)}  content="Enregistrer" positive />
     <Button  style={{marginTop:'15px'}} size="mini"
        color="yellow"
        content="Aller sur mon site" onClick={this.ChangePageSlide.bind(this)}  />
        </div>
      </div>
    );
  }
}
