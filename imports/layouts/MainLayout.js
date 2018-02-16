import React from 'react';

import Menu from '../components/Menu.js';
import styles from '../layouts/Mainlayout.css';




 const Mainlayout = ({ content }) => (

     <div className="main-layout">
      <Menu />
      <a href="https://m.me/Ad-Blanchot">  <img className="msslogo" src='/image/msslogo.svg' />

               </a>
      {content}


     </div>

 );

export default Mainlayout;
