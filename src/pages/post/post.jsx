import React, { Component } from 'react';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';

class Post extends Component {
  state = {};
  render() {
    return (
      <>
        <ResponsiveAppBar />
        <div>Some Demo Text Post</div>
      </>
    );
  }
}

export default Post;
