import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
 export default class Home extends Component {

   constructor(){
     super()
     this.state= {
       articles: [],
       article: {}
     };
   }

   componentWillMount(){
     this.getArticles();
     this.getArticle('WRDgjn2bA2hTjubid');
   }

   getArticle(id){
     Meteor.call('getArticle', id ,(err, res)=>{
       if(err){
         Bert.alert({
           title: "Erreur",
           message: err.message,
           type: 'danger'
         });
       } else {
         this.setState({article: res})
       }
     })
   }

   handleRemove(e){
     console.log(e.target.name)
     Meteor.call('removeArticle', e.target.name, (err, res)=>{
       if(err){
         Bert.alert({
           title: "Erreur",
           message: err.message,
           type: 'danger'
         });
       } else {
         Bert.alert({
           title: "Bravo",
           message: "Votre article a été supprimé",
           type: 'success'
         });
         this.getArticles();
       }
     })
   }

   getArticles(){
     Meteor.call('listeArticles', (err,res) =>{
       if(err){
         Bert.alert({
           title: "Erreur",
           message: err.message,
           type: 'danger'
         });
       } else {
         this.setState({articles: res.reverse()})
       }
     });
   }

   render(){
     console.log(this.state.articles);
     return (
       <div className="">
        {this.state.articles.map( (article)=> {
          return (
            <div key={article._id}>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
              <Button
                name={article._id}
                content="Supprimer"
                onClick={this.handleRemove.bind(this)}/>
            </div>
          )
        } )}
       </div>
     );
   }
 }
