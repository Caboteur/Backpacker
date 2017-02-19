import React, {Component} from 'react';
<<<<<<< HEAD
import axios from 'axios';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      term: 'meteor',
      data: [],
    };
  }

  componentWillMount() {
    this.getData(this.state.term);
  }

  getData(term) {
    const root = 'https://api.github.com/search/repositories?q=';
    axios.get(root + term)
      .then((response) => {
        this.setState({data: response.data.items});
        console.log(this.state.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="">
        <h1>
          Home
        </h1>
      </div>
    );
  }
}
=======
import GithubSearch from '../containers/GithubSearch.js'

 export default class Home extends Component {
   render(){
     return (
       <div className="">
         <h1>Home</h1>
         <GithubSearch />
       </div>
     );
   }
 }
>>>>>>> s01
