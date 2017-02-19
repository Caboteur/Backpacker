import React from 'react';
import { Segment, Grid } from 'semantic-ui-react'

import MainMenu from '../components/MainMenu.js';

 export const MainLayout = ({ content }) => (

   <div className="main-layout">
    <MainMenu />
     <div id="content" className="ui container">
         {content}
     </div>
   </div>
 );
