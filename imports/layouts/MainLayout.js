import React from 'react';


 export const MainLayout = ({ content }) => (

   <div className="main-layout">
    <div>Je suis le menu</div>
     <div id="content">
         {content}
     </div>
   </div>
 );
