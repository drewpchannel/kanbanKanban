'use strict';

class BigKanban extends React.Component {
  constructor(){
    super();
    this.state = {
      todoColData : [],
      second_Data : []
    }
    this.updateCard = this.updateCard.bind(this)
  };


  componentDidMount() {
    let componentContext = this
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () {
      let xhrData = JSON.parse(this.response)
      componentContext.setState({
        todoColData: xhrData.filter(function (card){
          return card.status === 'todo'
        })
      });
      // repeat this filter for the next 2 columns
    });
    oReq.open("GET", "http://localhost:2459/getAll");
    oReq.send();
  };

  updateCard(newCard) {
    console.log('in update card')
  }

  render() {
  console.log(this.state.todoColData)
    return (
      <div>
        <h1> Big Kanban </h1>
          <KanbanCol data={this.state.todoColData} updateCard={this.updateCard}/>
      </div>
    );
  };
};

class KanbanCol extends React.Component {
  render() {
    var parent = this;
    var theNode = this.props.data.map(function(postData) {
      return (
        <PostItems {...postData}
          updateCard={parent.props.updateCard}
          key={postData._id}
        />
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
        <PostItems {...passedData} key={passedData.id}/>
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
  constructor(){
    super()
    this.state = {id: null, title: '', priority: '', status: '', createdBy: '', assignedTo: ''}
    this.updateStatus = this.updateStatus.bind(this)
  }
  componentDidMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      priority: this.props.priority,
      status: this.props.status,
      createdBy: this.props.createdBy,
      assignedTo: this.props.assignedTo
    })
  }
  updateStatus(){
    this.props.updateCard(this.state)
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function (){
      console.log(this.responseText);
    });
    oReq.open("GET", "http://localhost:2459/getAll");
    oReq.send();
  }
  render() {
    return (
      <div className='redditItem'>
        <h3>{this.state.title}</h3>
        <p>{this.state.author}</p>
        <button onClick={this.updateStatus}>Put</button>
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


