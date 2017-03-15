import React, {Component} from 'react';

import Children from './Children.js'

export default class Test extends Component {
  render(){
    return(
      <Children titre="test" description="Description">
        <h1>Gros h1</h1>
      </Children>
    )
  }
}
