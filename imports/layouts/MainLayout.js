import React from 'react';
import { Segment, Grid } from 'semantic-ui-react'

import MainMenu from '../components/MainMenu.js';
import UserInfo from '../API/UserInfo.js'

 const MainLayout = ({ content }) => (
     <div className="main-layout">
      <MainMenu loggedin={UserInfo.loggedIn}/>
       <div id="content" className="ui container">
           {content}
       </div>
     </div>
 );

export default MainLayout;
