'use strict';
import { Link } from 'react-router';
import React from 'react';


import BigKanban from './public/kanban/BigKanban.jsx';
import ToDoPostsOne from './public/kanban/ToDoPostsOne.jsx';
import PostItems from './public/kanban/PostItems.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
      <ul role='nav'>
       /* <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>*/
      </ul>
        <BigKanban />
     /* <BigKanban url='https://www.reddit.com/r/news.json'/>*/
      </div>
    )
  }
}


export default App;