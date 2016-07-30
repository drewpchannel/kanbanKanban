import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory} from 'react-router';

import App from './App.jsx';
import About from './public/static/About.jsx';
import NoMatch from '.public/static/NoMatch.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' componen t={App}/>
    <Route path='/about' component={About}/>
    <Route path='*' component={NoMatch}/>
  </Router>,
  document.getElementById('content')
);



