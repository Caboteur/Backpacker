import React, {Component} from 'react';
import {Form, Segment,Select, Checkbox, Radio} from 'semantic-ui-react';
import {markdown} from 'markdown';

export default class NewProfiles extends Component {
  constructor(){
    super();
    this.state= {
      type:"",
      image:'/image/' + "",
      value:"",
      checkedvim: false,
      linkvim:'',
      checkedtwitt:false,
      linktwitt:''
    };
  }

  componentDidMount(){
    var titre = "Je suis un titre";

  }

  handleChange(e){

    this.setState({
      [e.target.name]: e.target.value
    });
    if(e.target.name=='description' ){
      this.setState({html: markdown.toHTML(e.target.value)})
    }
  }

  handleChangeValue(e){
 this.setState({value:e.target.value})

  }

  handleCancel(e){
    e.preventDefault();
    FlowRouter.go('/Profile');
  }

  handleSave(e){
    e.preventDefault();
    Meteor.call('saveProfile', this.state, (err, res)=> {
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

      }

    });
  }

     togglevim () {
       this.setState({ checkedvim: !this.state.checkedvim });
       console.log(this.state.checkedvim);
    }

   toggletwitt () {
     this.setState({ checkedtwitt: !this.state.checkedtwitt });
     console.log(this.state.checkedtwitt);
  }

test(e) {


}

  render(){

    return(
      <div>
        <h1>Créer un nouveau profile</h1>
      <Form>
        <Form.Input
          name="title"
          onChange={this.handleChange.bind(this)}
          value={this.state.title}
          label='Nom'
          placeholder='Saisissez le nom...'/>
          <Form.Input
            name="fonction"
            onChange={this.handleChange.bind(this)}
            value={this.state.fonction}
            label='Fonction'
            placeholder='Saisissez la fonction...'/>
        <Form.TextArea
          name="description"
          onChange={this.handleChange.bind(this)}
          value={this.state.description}
          label='Description'
          placeholder=''/>
          <Form.Group>
          <Form.Input
            name="image"
            onChange={this.handleChange.bind(this)}
            value={this.state.image}
            label='Image'
            placeholder='/image/persona.jpg'/>
            <Form.Field>
      </Form.Field>

          <Checkbox label='Check this box' onChange={this.togglevim.bind(this)} checked={this.state.checkedvim} />
          <Form.Input
            name="linkvim"
            onChange={this.handleChange.bind(this)}
            value={this.state.linkvim}
            label='lien'
            placeholder='url'/>
          <Checkbox label='Check this box' onChange={this.toggletwitt.bind(this)} checked={this.state.checkedtwitt} />
          <Form.Input
            name="linktwitt"
            onChange={this.handleChange.bind(this)}
            value={this.state.linktwitt}
            label='lien'
            placeholder='url...'/>

          <Form.Button onClick={this.handleSave.bind(this)} content="Enregistrer" positive />
          <Form.Button onClick={this.handleCancel.bind(this)} content="Annuler" negative />
        </Form.Group>
      </Form>


      </div>
    );
  }
}
