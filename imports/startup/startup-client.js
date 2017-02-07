
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Home from '/imports/components/Home.js'


Meteor.startup(()=> {
  ReactDOM.render(<Home />, document.getElementById('root'));
}
);
