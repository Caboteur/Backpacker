
import React, { Component } from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {mount} from 'react-mounter';

import MainLayout from '../layouts/MainLayout.js';
import Home from '../pages/Home.js';
import GithubSearch from '../containers/GithubSearch.js'
import NewArticle from '../containers/NewArticle.js';
import Article from '../components/Article.js';

FlowRouter.route('/', {
  name: 'home',
  action: function () {
    mount(MainLayout, { content: <Home /> });
  },
});

FlowRouter.route('/articles/new', {
  name: 'home',
  action: function () {
    mount(MainLayout, { content: <NewArticle /> });
  },
});

FlowRouter.route('/articles/:titre', {
  name: 'home',
  action: function (params) {
    mount(MainLayout, { content: <Article titre={params.titre}/> });
  },
});

FlowRouter.route('/githubsearch', {
  name: 'githubsearch',
  action: function () {
    mount(MainLayout, { content: <GithubSearch /> });
  },
});
