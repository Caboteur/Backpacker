import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'

import { Icon, Menu } from 'semantic-ui-react'
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react'

class MainMenuReact extends Component {

  NewArticle(){
    if(this.props.loggedin){
      return(<Menu.Item href="/articles/new">Nouvel article</Menu.Item>)
    } else {
      return false
    }
  }

  logout(){
    Meteor.logout((err)=>{
      if(err){
        Bert.alert({
          title:"Erreur réseau ",
          message: "Nous n'avons pas pu vous déconnecter",
          type: 'danger'
        });
      } else {
        Bert.alert({
          title:"Déconnexion",
          message: "Vous êtes maintenant déconnecté",
          type: 'success'
        });
      }
    });
  }

  render(){

    const Connect = () => {
      if(this.props.loggedin){
        return(<Menu.Item position="right" onClick={this.logout} href="#">Déconnexion</Menu.Item>);
      } else {
        return(<Menu.Item position="right" href="/login">Connexion</Menu.Item>)
      }
    }

    return (
      <Menu>
          <Menu.Item header href="/">Simplon Playground</Menu.Item>
          {this.NewArticle()}
          <Menu.Item
            href="/githubsearch"
            name='Github Search'/>
          {Connect()}
      </Menu>
    )
  }
}

const MainMenu = createContainer( ()=>{
  return {
    loggedin: Meteor.userId()
  };
} , MainMenuReact);

export default MainMenu
