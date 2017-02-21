import React, {Component} from 'react';

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

   saveArticle(){
     
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
         this.setState({articles: res})
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
            </div>
          )
        } )}
       </div>
     );
   }
 }
