import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';

export default class Search extends Component {

  handleChange(e){
    e.preventDefault();
    this.props.searchTerm(e.target.value);
  }

  render(){
    return(
      <Input loading={this.props.loading} fluid icon='search' placeholder={this.props.placeholder} onChange={this.handleChange.bind(this)}/>
    );
  }
}
