
import React, { Component } from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {mount} from 'react-mounter';

import MainLayout from '../layouts/MainLayout.js';
import Home from '../pages/Home.js';
import LoginForm from '../containers/LoginForm.js'
import GithubSearch from '../containers/GithubSearch.js'
import NewArticle from '../containers/NewArticle.js';
import Article from '../components/Article.js';

import menu from '../store/menu.js'

FlowRouter.route('/', {
  name: 'home',
  action: function () {
    menu.activeMenu.set('home');
    mount(MainLayout, { content: <Home /> });
  },
});

FlowRouter.route('/login', {
  name: 'home',
  action: function () {
    menu.activeMenu.set('login');
    mount(MainLayout, { content: <LoginForm /> });
  },
});

FlowRouter.route('/articles/new', {
  name: 'home',
  action: function () {
    menu.activeMenu.set('articleNew');
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
    menu.activeMenu.set('githubSearch');
    mount(MainLayout, { content: <GithubSearch /> });
  },
});
