import React, { Component } from 'react';
import styles from '../style/Menu.css';

export default class Menu extends Component {


  ChangePage () {
    FlowRouter.go("/Slide#Lieux");
    this.setState({close:'none'})
  }

  ChangeClose () {
    this.setState({close:''})
  }

render () {

return (

  <div className="MEnu">


<div className="outer-menu">
  <input className="checkbox-toggle" type="checkbox" onClick={this.ChangeClose.bind(this)}/>
  <div className="hamburger">
    <div></div>
  </div>
  <div className="menu" >
    <div>
      <div>
        <ul>

          <li><a href="#pitch">Le Pitch</a></li>
          <li><a href="#News">News</a></li>
          <li><a href="#equipe">L equipe</a></li>
          <li><a href="#Medias">Medias</a></li>
          <li><a href="#Lieux">Lieu de tournage</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>

)


}
}
