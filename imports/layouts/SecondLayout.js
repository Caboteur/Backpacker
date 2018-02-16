import React from 'react';

import styles from '../layouts/Mainlayout.css';
import Userstore from '../store/store.js';

import {withTracker} from 'meteor/react-meteor-data';
import { Menu } from 'semantic-ui-react';

 const SecondLayoutReact = ({ content }) => (

     <div className="main-layout">




      <a href="https://m.me/Ad-Blanchot">  <img className="msslogo" src='/image/msslogo.svg' />

               </a>
      {content}


     </div>

 );




const SecondLayout  = withTracker( ()=>{

 return {
   mainArticle: userStore.mainArticle,
   loggedin: Userstore.loggedin.get(),
 }

})(SecondLayoutReact);

 export default SecondLayout
