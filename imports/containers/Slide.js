import React, { Component } from 'react';
import { Button, Grid, Card, Image, Icon} from 'semantic-ui-react'
import {SectionsContainer, Section} from 'react-fullpage';
import {withTracker} from 'meteor/react-meteor-data';
import {bounceInLeft} from 'animate.css';

import Userstore from '../store/store.js'

import Actualites from '../components/Actualites.js';
import Profile from '../components/Profile.js';
import FormReact from '../components/Form.js';
import Head from '../components/Head.js';
import Menu from '../components/Menu.js';
import Sidebar from '../components/Sidebar.js';
import Maps from '../components/Maps.js';
import Anim from '../components/anim.js'
import Gallery from '../components/Gallery.js';
import styles from '../style/Slide.css';
import Pitch from '../components/Pitch.js';


class Slide extends Component {

  logout(){
   Userstore.logout((err)=>{
     if(err){
       Bert.alert({
         title:"Erreur réseau ",
         message: "Nous n'avons pas pu vous déconnecter",
         type: 'danger'
       });
     } else {
       Bert.alert({
         title:"Déconnexion",
         message: "Vous êtes maintenant déconnecté",
         type: 'success'
       });
     }
   });
 }




    render(){
      let options = {
  activeClass:          'active', // the class that is appended to the sections links
  anchors:              [], // the anchors for each sections
  arrowNavigation:      true, // use arrow keys
  className:            'SectionContainer', // the class name for the section container
  delay:                1000, // the scroll animation speed
  navigation:           false, // use dots navigatio
  scrollBar:            true, // use the browser default scrollbar
  sectionClassName:     'Section', // the section class name
  sectionPaddingTop:    '0', // the section top padding
  sectionPaddingBottom: '0', // the section bottom padding
  verticalAlign:        false // align the content of each section vertical
};

       const LogoutButton = () => {
             if (this.props.loggedin) {
           return (<Button
             size="mini"
             icon="delete"
             color="red"
             content="Logout"
             onClick={this.logout}/>)
           }

       }


        return (
          <div className="main-page">
          <SectionsContainer {...options}>
          <Section>
          <div className="couv">

            <div className="head">
            <h1 >BACKPACKER</h1>

            <div className="border-2"></div>
                <div className="trailer-btn" ><button className="btn draw-border">Regarder le trailer</button></div>
            </div>
            <Head />
            </div>
            </Section>
            </SectionsContainer>
            <div id="page-container" className="page-container">
            <div className="resume-2"></div>
            <div>
            <div className="social-media"><a className="icon" href="https://www.facebook.com/"><img src='/image/fb-btn.svg'/></a>
            <a className="icon" href="https://www.instagram.com/"><img src='/image/insta-btn.svg'/></a>
            <a className="icon" href="https://twitter.com/"><img src='/image/twitt-btn.svg'/></a>
            </div>
            <Pitch />
           <Actualites />
            <Profile />
            <Gallery />
              <Maps/>
              <FormReact />
               </div>
               </div>
          </div>
        );
      }
    }


    const SlideReact = withTracker( ()=>{
     console.log(Userstore.loggedin.get())
     return {
       loggedin: Userstore.loggedin.get(),
     }

   })(Slide);

     export default SlideReact
