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

   listeArticles(){
     this.state.articles.map( (article) => {
       console.log(article.title);
       return (
         <div>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
         </div>
       )
     } );
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
         <h1>Home</h1>
         {this.listeArticles}
       </div>
     );
   }
 }
