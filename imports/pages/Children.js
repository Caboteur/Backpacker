import React, {Component} from 'react';


export default class Children extends Component {
  render(){
    return(
      <div>
        <h1>{this.props.titre}</h1>
        <p>{this.props.description}</p>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
