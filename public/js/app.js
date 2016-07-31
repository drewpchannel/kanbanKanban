'use strict';
/*============================================
=            Hard-coded Test Data            =
============================================*/
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

/*==================================
=            Big Kanban            =
==================================*/
class BigKanban extends React.Component {
  constructor(){
    super();
    this.state = {
      dataOne : [],
      second_Data : []
    }
    this.updateCard = this.updateCard.bind(this)
  };

  componentDidMount() {
    this.setState({
      dataOne: arrayOne,
      second_Data: arrayTwo
    });

  };

  updateCard(newCard){
    console.log('We are in updateCard');
    this.pops.updateCard(this.state)
  }

  render() {
    return (
      <div id="bigk">
        <h1> Big Kanban </h1>
        <div id="postContainer">
          <PostColumns data={this.state.dataOne} updateCard={this.updateCard} colInfo={'TO DO'}/>
          <PostColumns data={this.state.second_Data} updateCard={this.updateCard} colInfo={'DOING'}/>
          <PostColumns data={this.state.second_Data} updateCard={this.updateCard} colInfo={'DONE'}/>
        </div>
      </div>
    );
  };
};

/*===================================
=            PostColumns            =
===================================*/
class PostColumns extends React.Component {
  render() {
    var parent = this;
    var theNode = this.props.data.map((passedData) => {
      return (
        <PostItems {...passedData}
          updateCard={parent.props.updateCard}
          key={passedData.id}
        />
        )
    });
    console.log(parent.props);
    return (
      <div id="list">
        <h1>{this.props.colInfo}</h1>
        { theNode }
      </div>
    );
  };
};

/*==================================
=            Post Items            =
==================================*/
class PostItems extends React.Component {
  constructor(){
    super()
    this.state = {id: 0, title: '', priority: '', status: '', createdBy: '', assignedTo: ''}
    this.updateStatus = this.updateStatus.bind(this)
  }
  componentDidMount() {
      this.setState({
        id: this.props.id,
        title: this.props.title,
        priority: this.props.priority,
        status:this.props.status,
        createdBy:this.props.createdBy,
        asssignedTo:this.props.assignedTo
      })
  }
  updateStatus(){
    this.props.updateCard(this.state);
  }
  render() {
    return (
      <div className='theposts'>
        <h3>{this.state.title}</h3>
        <p>{this.state.author}</p>
          <div>
            <button onClick={this.updateStatus}>Update Status</button>
          </div>
      </div>
    );
  };
};

/*==================================
=            Prototypes            =
==================================*/
BigKanban.PropTypes = {
  data: React.PropTypes.array
};

BigKanban.defaultProps = {
  data: []
};

/*====================================
=            React Render            =
====================================*/
ReactDOM.render(
  <BigKanban />,
  document.getElementById('content')
);
