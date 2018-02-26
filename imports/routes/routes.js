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

privateRoutes = FlowRouter.group({
  name:'privateroutes',
  triggersEnter:[function(context, redirect){
    if(Meteor.userId() == false){
      console.log("a")
      return FlowRouter.go('/');
    }
  }]
});


publicRoutes = FlowRouter.group({
  name:'publicroutes'
})

privateRoutes.route('/Admin', {
  name: 'Admin',
  action: function () {
    mount(Mainlayout, { content: <Admin /> });
  },
});

publicRoutes.route('/MainActualites', {
  name: 'MainActualites',
  action: function () {
    mount(Secondlayout, { content: <MainActualites /> });
  },
});

publicRoutes.route('/Fiche', {
  name: 'Fiche',
  action: function () {
    mount(Secondlayout, { content: <MainProfile /> });
  },
});

publicRoutes.route('/Slide', {
  name: 'Slide',
  action: function () {
    mount(Mainlayout, { content: <Slide /> });
  },
});

publicRoutes.route('/Connection', {
  name: 'Connection',
  action: function () {
    mount(Mainlayout, { content: <Connection /> });
  },
});

publicRoutes.route('/Welcome', {
  name: 'Welcome',
  action: function () {
    mount(Welcomelayout, { content: <Welcome /> });
  },
});

publicRoutes.route('/MainArticle', {
  name: 'Main',
  action: function () {
    mount(Secondlayout, { content: <MainArticle /> });
  },
});

publicRoutes.route('/MainVideo', {
  name: 'MainVideo',
  action: function () {
    mount(Secondlayout, { content: <MainVideo /> });
  },
});
