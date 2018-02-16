import React, {Component} from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import {ReactiveVar} from 'meteor/reactive-var';
import {withTracker} from 'meteor/react-meteor-data';




 class MainArticleReact extends Component {

   ChangePage () {
     FlowRouter.go("/Slide");
   }

  render() {
    const article = () => {if(this.props.mainArticle.get()== undefined){

    }else{
      const def =this.props.mainArticle.get();
       return (
         <div  key={def._id} style={{width:'55%', margin:'auto', marginTop: '20px'}}>
             <div style={{maxWidth:'690px'}}>
              <img src={def.image} />
              </div>
              <div className="article-title" style={{marginTop:'40PX', fontSize: '17px', fontSize: '35px'}}><p >{def.title}</p></div>
              <p style={{width:'100%', margin:'auto',marginTop:'40PX', fontFamily: 'Josephin Slab', lineHeight:'2em' }}>{def.description}</p>
               <p className="article-date">{def.date}</p>
              <div className="border"></div>
             </div>


       )
    }
    }
    return (



      <div >

{article()}
          <button style={{marginTop:'70px'}}className="btn btn--stripe" onClick={this.ChangePage.bind(this)}>Accueil</button>
      </div>
    );
  }
}

const MainArticle = withTracker( ()=>{

 return {
   mainArticle: userStore.mainArticle,
 }

})(MainArticleReact);

 export default MainArticle
