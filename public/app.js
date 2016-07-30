'use strict';
var arrayOne = [
  {id:1, title:'Pray', authors:'jojoebinks'},
  {id:2, title:'Order Holy Water', authors:'sgnl'},
  {id:3, title:'Kick it with Big G', authors:'jaywon'},
  {id:4, title:'Clean confession box', authors:'theRemix'},
];

var arrayTwo = [
  {id:11, title:'Order shoes', authors:'jojoebinks'},
  {id:12, title:'Order booze', authors:'sgnl'},
  {id:13, title:'Threaten South Korea', authors:'jaywon'},
  {id:14, title:'Call Son', authors:'theRemix'},
];

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
      <div>
        <h1> Big Kanban </h1>
        <ToDoPostsOne data={this.state.dataOne}/>
        <ToDoPostsTwo data={this.state.second_Data}/>
      </div>
    );
  };
};

class ToDoPostsOne extends React.Component {
  render() {
    var theNode = this.props.data.map(function(passedData) {
      return (
        <PostItems title={passedData.title} author={passedData.author} key={passedData.id}/>
        )
    });
    return (
      <div>
        <h1>Christian To Do List</h1>
        { theNode }
      </div>
    );
  };
};

class ToDoPostsTwo extends React.Component {
  render() {
    var theNode = this.props.data.map(function(passedData) {
      return (
        <PostItems title={passedData.title} author={passedData.author} key={passedData.id}/>
        )
    });
    return (
      <div>
        <h1>Kim Jong Il To Do List</h1>
        { theNode }
      </div>
    );
  };
};


class PostItems extends React.Component {
  render() {
  console.log('this.props.data: ', this.props.data)
    return (
      <div className='redditItem'>
        <h3>{this.props.title}</h3>
        <p>{this.props.author}</p>
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

ReactDOM.render(
  <BigKanban />,
  document.getElementById('content')
);

