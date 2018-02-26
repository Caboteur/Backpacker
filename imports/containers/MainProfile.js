import React, { Component } from 'react';
import { Button, Grid, Card, Image, Icon} from 'semantic-ui-react'

import Menu from '../components/Menu.js';
import Media from 'react-media';
import Slide  from 'react-reveal/Zoom';
import Popup from '../components/Popup.js';
import Userstore from '../store/store.js';
import {withTracker} from 'meteor/react-meteor-data';

 class MainProfileReact extends Component {

  constructor(){
      super()
      this.state= {
        articles: [],
        showPopup: false,
        num: 0
      };
    }

    componentWillMount(){
      this.getArticles();

    }



    handleRemove(e){
      console.log(e.target.name)
      Meteor.call('removeProfile', e.target.name, (err, res)=>{
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
      Meteor.call('listeProfile', (err,res) =>{
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

    togglePopup(e) {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }

    ChangePage () {
      FlowRouter.go("/Slide");
    }


    render(){

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

      const FolowButton = () => {

            return(<Button
            size="mini"
            color='yellow'
            content="Lire plus"
              />)


            }

       const label = (props) => {
         if(this.state.objet == ""){

          console.log("attends")

        } else {

          var cont = props.substring(0,150);

            return (cont)}


        }


               const LogoutButton = () => {
                     if (this.props.loggedin) {
                   return (<Button
                     fluid
                     color="red"
                     content="Logout"
                     onClick={this.logout}/>)
                   }

               }




        return (
          <div >
                       {LogoutButton()}

                  <div style={{height:"100px", textAlign:"center"}} className="categorie-title">l equipe<img style={{width:"70px", float:'right', marginTop: "-15px",
                marginRight: "10px"}} src='/image-icon/cafe.svg'/></div>

                  <div style={{width:'70%', margin:'auto'}}>



                  <Grid container columns={3}>

                <Grid.Row>
                {this.state.articles.map( (article)=> {
                  const handle = () => {
                   this.setState({objet: article.description});
                   console.log(this.state.objet);
                   this.togglePopup();
                 }
                        return (
               <Grid.Column>
               <div className="profil-div" style={{marginBottom:'60px'}}>
             <p className="para-title">{article.title}</p>
              <img  onClick={ handle} className="card-img" src="/image/luisito.png" />
              <p className="fonction-div">{article.fonction}</p>
              <div>
              <img style={{width:"50px"}} src='/image-icon/vimeo.svg'/>

              </div>
              {
                this.state.showPopup ?

             <Popup
             text={this.state.objet}
             closePopup={this.togglePopup.bind(this)} />

          : null
        }

             {RemoveButton(article._id)}
            </div>
               </Grid.Column>


             )

               }
               )
               }






        </Grid.Row>
        </Grid>
           <button style={{marginTop:'70px'}}className="btn btn--stripe" onClick={this.ChangePage.bind(this)}>Accueil</button>
         </div>
 </div>








        );
      }
    }

    const MainProfile = withTracker( ()=>{

     return {
       loggedin: Userstore.loggedin.get(),
     }

   })(MainProfileReact);

     export default MainProfile
