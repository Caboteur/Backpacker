import React, {Component} from 'react';
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
