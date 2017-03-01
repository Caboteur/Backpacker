import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import {Card, Segment} from 'semantic-ui-react';

import Search from '../components/Search.js';
import RepoCard from '../components/RepoCard.js';

export default class GithubSearch extends Component {

  constructor(){
    super();
    this.state = {
      term: 'meteor',
      data: [],
      loading: true
    }
  }

  getData(term){
    this.setState({loading: true});
    const root = 'https://api.github.com/search/repositories?q=';
    axios.get(root + term)
    .then((response) => {
      this.setState({data: response.data.items, loading: false});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  componentWillMount(){
    this.getData(this.state.term);
  }


  render(){

    const list = this.state.data.map( (element) => {
      return (<RepoCard key={element.id} data={element} />)
    } );

    const results = this.state.data.length > 0 ? list : <h1>Pas de data</h1>

    const debouncedSearch = _.debounce((term)=> {
      console.log(term);
      this.getData(term)}
      , 300)

    return(
      <div>
        <Segment>
          <h1> Je suis le composant Githubsearch</h1>
          <Search loading={this.state.loading} placeholder="Chercher un repo sur github" searchTerm={debouncedSearch} />
        </Segment>
        <Segment loading={this.state.loading}>
          <Card.Group itemsPerRow={4}>
          {results}
          </Card.Group>
        </Segment>
      </div>
    );
  }
}
