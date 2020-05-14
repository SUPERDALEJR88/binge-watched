import React from 'react';
import ReactDOM from 'react-dom';
import { RouterStore, View, startRouter } from 'mobx-state-tree-router';
import { initStore } from './models/index';
import App from './containers/App';
import Home from './pages/Home';
import './index.css';

const initialStore = initStore();

const views = {
  home: View.create({
    name: 'home',
    path: '/',
    component: <Home store={initialStore} />
  }),
  about: View.create({
    name: 'about',
    path: '/about',
    component: <div>About page</div>
  })
};

const router = RouterStore.create({
  views: views
});

startRouter(router);

ReactDOM.render((
  <div>
    <App router={router} views={views} store={initialStore} />
  </div>
), document.getElementById('root'));
