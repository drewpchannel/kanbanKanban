import React from 'react';
import PostItems from './PostItems.jsx';


class ToDoPostsOne extends React.Component {
  render() {
    var theNode = this.props.data.map(function(passedData) {
      return (
        <PostItems title={passedData.title} author={passedData.author} key={passedData.id}/>
        )
    });
    return (
      <div id="list">
        <h1>Christian To Do List</h1>
        { theNode }
      </div>
    );
  };
};

// class ToDoPostsTwo extends React.Component {
//   render() {
//     var theNode = this.props.data.map(function(passedData) {
//       return (
//         <PostItems title={passedData.title} author={passedData.author} key={passedData.id}/>
//         )
//     });
//     return (
//       <div id="list">
//         <h1>Kim Jong Il To Do List</h1>
//         { theNode }
//       </div>
//     );
//   };
// };

export default ToDoPostsOne;