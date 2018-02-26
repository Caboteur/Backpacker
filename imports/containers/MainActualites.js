import React, {Component} from 'react';
import Media from 'react-media';
import Slide  from 'react-reveal/Zoom';

import Userstore from '../store/store.js';
import Menu from '../components/Menu.js';
import Sidebar from '../components/Sidebar.js';


import {ReactiveVar} from 'meteor/reactive-var';
import {withTracker} from 'meteor/react-meteor-data';

import {Button,  Grid, Card, Image, Icon} from 'semantic-ui-react';

import styles from '../style/Article.css'

 class MainActualites extends Component {

   constructor(){
     super()
     this.state= {
       FolowArticle:[],
       FolowArticleLarge:[],
       articles: [],
       FirstArticle: [],
       StockArticle:""
     };
   }

   componentWillMount(){
     this.getArticles();
      console.log(this.state.articles);

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
         console.log(res);
         this.ReturnArticle();
         console.log(this.state.ViewArticle)
       }
     });

   }



   ReturnArticle () {

     const FolowArticle = this.state.articles.slice(1, 2);
     this.setState({FolowArticle: FolowArticle});
     const FirstArticle = this.state.articles.slice(0, 3);
     this.setState({FirstArticle:FirstArticle });
     console.log(FirstArticle)
     const FolowArticleLarge = this.state.articles.slice(2,5);
     this.setState({FolowArticleLarge:FolowArticleLarge });
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

   ChangePage () {
     FlowRouter.go("/Slide");
   }

   render(){


         const settings = {
           dots: true,
           infinite: true,
           speed: 500,
           slidesToShow: 1,
           slidesToScroll: 1
         };


   const label = (props) => {
       var cont = props.substring(0,140);
       return (cont)}

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


                   const LogoutButton = () => {
                         if (this.props.loggedin) {
                       return (<Button
                         basic
                         floated='right'
                         color="red"
                         content="Logout"
                         onClick={this.logout}/>)
                       }

                   }


     return (

         <div className="article-container">

              {LogoutButton()}

         <div style={{height:"100px", textAlign:"center"}} className="categorie-title">Medias<img style={{width:"70px", float:"right",marginTop: "-15px",
       marginRight: "10px"}} src='/image-icon/actu.svg'/></div>



                <div className="bloc"></div>



              {this.state.FirstArticle.map( (article)=> {

                const handleClick = ()=> {
                  this.props.mainArticle.set(article)
                   FlowRouter.go('/MainArticle')
                  console.log(this.props.mainArticle)
                }

                 return (
                  <Slide left duration={500}>
                   <div  key={article._id} className="item" onClick={handleClick}>
                      <div className="div-img">
                      <div className="stamp"> <img className="article-img" src={article.image} /> </div>
                       </div>
                       <div className="article-title"><p >{article.title}<p className="article-date">{article.date}</p></p></div>

                       <p className="article-description">{label (article.description)}...</p>

                       <div className="border"></div>
                       {RemoveButton(article._id)}
                      </div>

               </Slide>
            )

      }
      )
    }


         <button style={{marginTop:'70px'}}className="btn btn--stripe" onClick={this.ChangePage.bind(this)}>Accueil</button>

                <div className="real"></div>



    </div>


     )
   }
 }

 const MainActualitesReact = withTracker( ()=>{

  return {
    mainArticle: userStore.mainArticle,
    loggedin: Userstore.loggedin.get(),
  }

})(MainActualites);

  export default MainActualitesReact
