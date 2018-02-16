import React, {Component} from 'react';

import styles from '../style/video.css'

import { Button } from 'semantic-ui-react'
import Userstore from '../store/store.js';
import {withTracker} from 'meteor/react-meteor-data';

 class MainVideoReact extends Component {
  constructor(){
    super()
    this.state= {
      ListVideo:[],
      Video:''
    };
  }

  componentWillMount(){
    this.getVideo();

  }


  getVideo(){
    Meteor.call('listeVideo', (err,res) =>{
      if(err){
        Bert.alert({
          title: "Erreur",
          message: err.message,
          type: 'danger'
        });
      } else {
        const vid = res.reverse();
        this.setState({ListVideo: vid})

      }
    });

  }

  handleRemove(e){

    Meteor.call('removeVideo', e.target.name, (err, res)=>{
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

      }
    })
  }


  ChangePage () {
    FlowRouter.go("/Slide");
  }

  render() {


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

    return (



      <div >
      <div style={{width:'75%', margin:'auto'}}>
      <div id="equipe" style={{height:"100px", textAlign:"center"}} className="categorie-title">Video<img style={{width:"70px", float:"right",marginTop: "-15px",
    marginRight: "10px"}} src='/image-icon/play.svg'/></div>

         {this.state.ListVideo.map( (article)=> {

      return (

      <div style={{width:'80%', height:'500px', margin:'auto'}}>
 <iframe style={{width:'100%', height:'500px',     border: '8px solid white'}} className="rapido" id="youfs" src={article.title}></iframe>
       {RemoveButton(article._id)}
   </div>
 )
         }
       )
     }



     </div>

             <button style={{marginTop:'70px'}}className="btn btn--stripe" onClick={this.ChangePage.bind(this)}>Accueil</button>
      </div>


    );
  }
}

const Video = withTracker( ()=>{

 return {
   mainArticle: userStore.mainArticle,
   loggedin: Userstore.loggedin.get(),
 }

})(MainVideoReact);

 export default Video
