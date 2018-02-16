import React, { Component } from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import Actualites from '../components/Actualites.js';
import Profile from '../components/Profile.js';
import Admin from '../containers/admin.js';
import Slide from '../containers/Slide.js';
import Connection from '../containers/Connection.js';
import MainArticle from '../components/MainArticle.js';
import MainVideo from '../components/MainVideo.js';
import MainProfile from '../containers/MainProfile.js';

import Welcome from '../containers/Welcome.js'
import MainActualites from '../containers/MainActualites.js';

import Secondlayout from '../layouts/SecondLayout.js';
import Mainlayout from '../layouts/MainLayout.js';
import Welcomelayout from '../layouts/Welcomelayout.js';


FlowRouter.route('/Admin', {
  name: 'Admin',
  action: function () {
    mount(Mainlayout, { content: <Admin /> });
  },
});

FlowRouter.route('/MainActualites', {
  name: 'MainActualites',
  action: function () {
    mount(Secondlayout, { content: <MainActualites /> });
  },
});

FlowRouter.route('/Fiche', {
  name: 'Fiche',
  action: function () {
    mount(Secondlayout, { content: <MainProfile /> });
  },
});

FlowRouter.route('/Slide', {
  name: 'Slide',
  action: function () {
    mount(Mainlayout, { content: <Slide /> });
  },
});

FlowRouter.route('/Connection', {
  name: 'Connection',
  action: function () {
    mount(Mainlayout, { content: <Connection /> });
  },
});

FlowRouter.route('/Welcome', {
  name: 'Welcome',
  action: function () {
    mount(Welcomelayout, { content: <Welcome /> });
  },
});

FlowRouter.route('/MainArticle', {
  name: 'Main',
  action: function () {
    mount(Secondlayout, { content: <MainArticle /> });
  },
});

FlowRouter.route('/MainVideo', {
  name: 'MainVideo',
  action: function () {
    mount(Secondlayout, { content: <MainVideo /> });
  },
});
