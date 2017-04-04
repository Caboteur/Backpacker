import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'

import { Icon, Menu, Label } from 'semantic-ui-react'
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react'

import userStore from '../store/user.js'
import github from '../store/github.js'
import menu from '../store/menu.js'
class MainMenuReact extends Component {

  NewArticle(){
    if(this.props.loggedin){
      return(<Menu.Item href="/articles/new" active={this.props.activeMenu == 'articleNew'}>Nouvel article</Menu.Item>)
    } else {
      return false
    }
  }

  logout(){
    userStore.logout((err)=>{
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
        return(<Menu.Item position="right" href="/login" active={this.props.activeMenu == 'login'}>Connexion</Menu.Item>)
      }
    }

    const label = () => {
      if(this.props.results.length > 0){
        return(
          <Label color='green'>
            {this.props.results.length}
          </Label>
        )
      }
    };

    return (
      <Menu>
          <Menu.Item header href="/" active={this.props.activeMenu == 'home'}>Simplon Playground</Menu.Item>
          {this.NewArticle()}
          <Menu.Item
            active={this.props.activeMenu == 'githubSearch'}
            href="/githubsearch">
            Github Search {label()}
          </Menu.Item>
          {Connect()}
      </Menu>
    )
  }
}

const MainMenu = createContainer( ()=>{
  return {
    loggedin: userStore.loggedin.get(),
    activeMenu: menu.activeMenu.get(),
    results: github.results.get()
  };
} , MainMenuReact);

export default MainMenu
