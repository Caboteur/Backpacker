import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import {Button, Grid, Card, Image, Icon} from 'semantic-ui-react';
import userStore from '../store/user.js'

class HomeReact extends Component {

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
     console.log(this.props.user)
     const RemoveButton = (id) => {
       if(this.props.loggedin){
         return (<Button
           size="mini"
           icon="delete"
           color="red"
           name={id}
           content="Supprimer"
           onClick={this.handleRemove.bind(this)}/>)
       }
     }

     const userMail = ()=>{
       if(this.props.user.emails){
         return this.props.user.emails[0].address
       } else {
         return 'chargement...'
       }
     };

     const colGauche = ()=> {
       if(this.props.loggedin){
         return (
           <Grid.Column width={4}>
             <Card>
               <Image src='http://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
               <Card.Content>
                 <Card.Header>
                   {userMail()}
                 </Card.Header>
               </Card.Content>
              </Card>
            </Grid.Column>
          )
       }
     };

     return (
       <Grid>
        {colGauche()}
        <Grid.Column width={this.props.loggedin ? 12 : 16}>
        <div className="">
         {this.state.articles.map( (article)=> {
           return (
             <div key={article._id}>
               <a href={'/articles/' + article.title}><h1>{article.title}</h1></a>
               <p>{article.description}</p>
               {RemoveButton(article._id)}
             </div>
           )
         } )}
        </div>
        </Grid.Column>
       </Grid>
     );
   }
 }

 var Home = createContainer( ()=>{
   return {
     loggedin: userStore.loggedin.get(),
     user: userStore.user.get()
   };
 } , HomeReact );

 console.log(userStore);

 export default Home;
