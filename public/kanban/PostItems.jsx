import React from 'react';

class PostItems extends React.Component {
  render() {
  console.log('this.props.data: ', this.props.data)
    return (
      <div className='theposts'>
        <h3>{this.props.title}</h3>
        <p>{this.props.author}</p>
      </div>
    );
  };
};

export default PostItems;