import React from 'react';
import MainMenu from '../components/MainMenu.js';

 export const MainLayout = ({ content }) => (

   <div className="main-layout">
    <MainMenu />
     <div id="content" className="ui container">
         {content}
     </div>
   </div>
 );
