import React from 'react';
import ToDoPostsOne from './ToDoPostsOne.jsx';

class BigKanban extends React.Component {
    constructor(){
      super();
      this.state = {
        dataOne : [],
        second_Data : []
    }
  };

  componentDidMount() {
    this.state.dataOne = arrayOne;
    this.setState({data: arrayOne});
    this.state.second_Data = arrayTwo;
    this.setState({second_Data: arrayTwo});
  };

  render() {
    return (
      <div id="bigk">
        <h1> Big Kanban </h1>
        <ToDoPostsOne data={this.state.dataOne}/>
      </div>
    );
  };
};

BigKanban.PropTypes = {
  data: React.PropTypes.array
};

BigKanban.defaultProps = {
  data: []
};

export default BigKanban;