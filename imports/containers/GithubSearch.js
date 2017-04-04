import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data'

import _ from 'lodash';
import {Card, Segment} from 'semantic-ui-react';

import Search from '../components/Search.js';
import RepoCard from '../components/RepoCard.js';

import github from '../store/github.js'

class GithubSearchReact extends Component {

  constructor(){
    super();
    this.state = {
      term: 'meteor',
      loading: false
    }
  }

  getData(term){
    this.setState({loading: true});
    github.getData(term, (e)=>{
      if(e){
        this.setState({loading: false});
        console.log(e)
      } else {
        this.setState({loading: false});
      }
    })
  }

  componentWillMount(){
    if(!this.props.results.length > 0){
      this.getData(this.state.term);
    }
  }


  render(){

    const list = this.props.results.map( (element) => {
      return (<RepoCard key={element.id} data={element} />)
    } );

    const results = this.props.results.length > 0 ? list : <h1>Pas de data</h1>

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

const GithubSearch = createContainer( ()=>{
  return {
    results: github.results.get()
  };
} , GithubSearchReact);

export default GithubSearch
