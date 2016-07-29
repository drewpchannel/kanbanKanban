'use strict';
var data1 = [
  {id:1, title:'kthing 1', authors:'bob'},
  {id:2, title:'kthing 2', authors:'bob'},
  {id:3, title:'kthing 3', authors:'bob'},
  {id:4, title:'kthing 4', authors:'bob'}
];

var data2 = [
  {id:1, title:'kB 1', authors:'bob'},
  {id:2, title:'kB 2', authors:'bob'},
  {id:3, title:'kB 3', authors:'bob'},
  {id:4, title:'kB 4', authors:'bob'}
];

class BigKanban extends React.Component {
    constructor(){
      super();
      this.state = {
        data1 : []
    }
  };

  componentDidMount() {
    this.setState({data1: data1})
    this.setState({data2: data2})
    // console.log(this.state.data1);
  };

  render() {
    return (
      <div>
        <h1> Kanban Box </h1>
        <KanbanActions data1={this.state.data1}/>
        <KanbanActions data2={this.state.data2}/>
      </div>
    );
  };
};

class KanbanActions extends React.Component {
  render() {
    var theNode = this.props.data1.map(function(dataItems) {
      return (
        <KanbanPosts title={dataItems.title} author={dataItems.author} key={dataItems.id}/>
        )
      // console.log(dataItems)
    });
  // console.log('this.props.data: ', this.props.data)
    return (
      <div>
        <h1>Kanban Action 1</h1>
        { theNode }
      </div>
    );
  };
};

class KanbanActions2 extends React.Component {
  render() {
    var theNode = this.props.data2.map(function(dataItems) {
      return (
        <KanbanPosts title={dataItems.title} author={dataItems.author} key={dataItems.id}/>
        )
      // console.log(dataItems)
    });
  // console.log('this.props.data: ', this.props.data)
    return (
      <div>
        <h1>Kanban Action 2</h1>
        { theNode }
      </div>
    );
  };
};

class KanbanPosts extends React.Component {
  render() {
  console.log('this.props.data: ', this.props.data1)
    return (
      <div className='KanbanPosts'>
        <h3>{this.props.title}</h3>
        <p>{this.props.author}</p>
      </div>
    );
  };
};

BigKanban.PropTypes = {
  data1: React.PropTypes.array
};

BigKanban.defaultProps = {
  data1: []
};

ReactDOM.render(
  <BigKanban />,
  document.getElementById('content')
);

