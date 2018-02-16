import React, { Component } from 'react';
import { Button, Grid, Card, Image, Icon} from 'semantic-ui-react'

import Menu from '../components/Menu.js';
import Media from 'react-media';
import Slide  from 'react-reveal/Zoom';
import Popup from '../components/Popup.js';
import styles from '../style/Profile.css';

export default class Profile extends Component {

  constructor(){
      super()
      this.state= {
        articles: [],
        stopcard: [],
        objet:"",
        showPopup: false,
        num: 0
      };
    }

    componentWillMount(){
      this.getArticles();

    }



    handleRemove(e){
      
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
          this.getCard();
          this.ReturnArticle();
        }
      });
    }

    togglePopup(e) {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }

    getCard (){

      const i = this.state.num;


       this.state.articles[i];

       this.setState({objet:this.state.articles[i]});





       if (i < this.state.articles.length-1) {
         const count = i + 1 ;


         this.setState({num:count});

      }else {
        const count = 0 ;


        this.setState({num:count});

      }
    }



    getlessCard (){

      const i = this.state.num;



             this.state.articles[i];

             this.setState({objet:this.state.articles[i]});



             if(i > 0 ){
               const count = i - 1 ;


               this.setState({num:count});
             }else {
               const count = this.state.articles.length-1 ;


               this.setState({num:count});


             }

    }

    ReturnArticle () {
      const StopCard = this.state.articles.slice(0, 6);

      this.setState({stopcard: StopCard});

    }

    ChangeRoute() {
     FlowRouter.go('/Fiche');
    }

    render(){

      const RemoveButton = (id) => {

          return (<Button
            size="mini"
            icon="delete"
            color="red"
            name={id}
            content="Supprimer"
            onClick={this.handleRemove.bind(this)}/>)
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


        } else {

          var cont = props.substring(0,150);

            return (cont)}


        }




        return (
          <div className="Card-container">



                  <div id="equipe" style={{height:"100px", textAlign:"center", boxShadow: '0px 5px 20px #0000002e'}} className="categorie-title">l equipe<img style={{width:"50px", float:"right",marginTop: "-15px",
                marginRight: "10px"}} src='/image-icon/cafe.svg'/></div>

                  <div className="p">  </div>

                  <div className='div-card-container'>

                <Grid container columns={2}>

                <Grid.Row>
                {this.state.stopcard.map( (article)=> {
                  const handle = () => {
                   this.setState({objet: article.description});

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
            </div>
               </Grid.Column>


             )

               }
               )
               }






        </Grid.Row>
        </Grid>
           <button style={{marginTop:'70px'}}className="btn btn--stripe" onClick={this.ChangeRoute.bind(this)}>Fiche technique</button>
         </div>
 </div>








        );
      }
    }
