import React, {Component} from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react'

class MainMenu extends Component {

  render(){
    const logButton = () => {
      if(this.props.loggedin){
        console.log(this.props.loggedin)
        return (<Menu.Item href="" onClick={Meteor.logout} >Déconnexion</Menu.Item>)
      } else {
        console.log(this.props.loggedin)
        return (<Menu.Item href="/login">Connexion</Menu.Item>)
      }
    }

    return (
      <Menu>
          <Menu.Item header href="/">Simplon Playground</Menu.Item>
          <Menu.Item href="/articles/new">Nouvel article</Menu.Item>
          <Menu.Item
            href="/githubsearch"
            name='Github Search'/>
          {logButton()}
          <Menu.Item position="right"><LoginButtons align="right"/></Menu.Item>
      </Menu>
    )
  }
}

export default MainMenu
