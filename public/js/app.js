'use strict';
/*==================================
=            Big Kanban            =
==================================*/
class BigKanban extends React.Component {
  constructor(){
    super();
    this.state = {
      toggler : false,
      ColData : [],
      ColDataTwo : [],
      ColDataThree : []
    }
    this.updateCard = this.updateCard.bind(this)
    this.addCard = this.addCard.bind(this)
    this.newCard = this.newCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
  };

  componentDidMount() {
    this.getAllCards();
  };

  getAllCards(){
    let componentContext = this;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () {
      let xhrData = JSON.parse(this.response)
      componentContext.setState({
        ColData: xhrData.filter(function (card){
          return card.status === 'todo';
        }),
        ColDataTwo: xhrData.filter(function (card){
          return card.status === 'doing';
        }),
        ColDataThree: xhrData.filter(function (card){
          return card.status === 'done';
        }),
      });
    });
    oReq.open("GET", "http://localhost:2459/getAll");
    oReq.send();
  }

  updateCard(card) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function (){
      console.log("Update button calls for u");
    });
    oReq.open("GET", "http://localhost:2459/test");
    oReq.setRequestHeader("Content-Type", "application/json");
    oReq.send(JSON.stringify({status: 'statusButtonNext'}));
  }

  newCard(card) {
    if(this.state.toggler){
      this.state.toggler = false;
    }else{
      this.state.toggler = true;
    }
    this.getAllCards();
  }

  addCard(card) {
    let componentContext = this;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function (){
      componentContext.getAllCards();
    });
    oReq.open("POST", "http://localhost:2459/new");
    oReq.setRequestHeader("Content-Type", "application/json");
    oReq.send();
  }

  deleteCard(cardId) {
    let componentContext = this;
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function (){
      componentContext.getAllCards();
    });
    oReq.open("DELETE", "/delete");
    oReq.setRequestHeader("Content-Type", "application/json");
    oReq.send(JSON.stringify({id:cardId}));
  }

  render() {
    return (
      <div id="bigk">
        <h1> Big Kanban </h1>
        <button onClick={this.newCard}>NEW</button> <br/>
        {this.state.toggler ?
          <div>
            <form>
              First name:<br/>
              <input type="text" name="firstname" value="Mickey"/>
              <br/>
              Last name:<br/>
              <input type="text" name="lastname" value="Mouse"/>
              <br/>
              <input type="submit" value="Submit"/>
            </form>
          </div>: null} <br/>
        <div id="postContainer">
          <PostColumns data={this.state.ColData} updateCard={this.updateCard} deleteCard={this.deleteCard} colInfo={'TO DO'}/>
          <PostColumns data={this.state.ColDataTwo}  updateCard={this.updateCard} deleteCard={this.deleteCard} colInfo={'DOING'}/>
          <PostColumns data={this.state.ColDataThree} updateCard={this.updateCard} deleteCard={this.deleteCard} colInfo={'DONE'}/>
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
    // console.log("3 tracker",this.props);
    var parent = this;
    var theNode = this.props.data.map((passedData) => {
      return (
        <PostItems {...passedData}
          updateCard={parent.props.updateCard}
          deleteCard={parent.props.deleteCard}
          getAllCards={parent.props.getAllCards}
          key={passedData._id}
        />
        )
    });
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
    this.state = {_id: 0, title: '', priority: '', status: '', createdBy: '', assignedTo: ''}
    this.updateCard = this.updateCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
  }
  componentDidMount() {
      this.setState({
        _id: this.props._id,
        title: this.props.title,
        priority: this.props.priority,
        status:this.props.status,
        createdBy:this.props.createdBy,
        asssignedTo:this.props.assignedTo
      })
  }
  updateCard(){
    this.props.updateCard(this.state)
  }

  deleteCard(){
    this.props.deleteCard(this.state._id);
  }

  render() {
    // console.log()("4 tracker",this.props);
    return (
      <div className='theposts' id={this.state._id}>
        <h3>{this.state.title}</h3>
            {this.state.priority}<br/>

          <div className="buttonDiv">
            {/*<a className="updateButton" href={this.updateCard}>Update Status</a>*/}
            <button onClick={this.updateCard}>Update</button>
            <button onClick={this.deleteCard}>Delete</button>
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

function reqListener(){
  console.log(this.responseText);
}

/*====================================
=            React Render            =
====================================*/
ReactDOM.render(
  <BigKanban />,
  document.getElementById('content')
);