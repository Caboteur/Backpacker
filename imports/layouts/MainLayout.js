import React from 'react';
import { Segment, Grid } from 'semantic-ui-react'


export const MainLayout = ({ content }) => (

  <div className="main-layout">
    <div id="content">
        {content}
    </div>
  </div>
);
