import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr'

import {MainLayout} from '../layouts/MainLayout.js';
import Home from '../pages/Home.js';

FlowRouter.route('/', {
  name: 'home',
  action: function() {
    mount(MainLayout, {content: <Home />});
  }
});
