import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Welcome from './Welcome.js';

export default class Home extends Component{

  render(){
    return (
      <div className="ui container">
        <Segment.Group horizontal>
          <Segment>
            <Welcome />
          </Segment>
          <Segment>
            <h3>Je suis le deuxième composant</h3>
          </Segment>
          <Segment>
            <h3>Je suis le troisième composant</h3>
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}
