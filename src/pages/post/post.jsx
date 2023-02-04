import React, { Component } from 'react';
import Base from '../base_outline/base';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';

class Post extends Component {
  state = {};
  render() {
    return (
      <>
        <ResponsiveAppBar />
        <div>Some Demo Text IdeaChain</div>
      </>
    );
  }
}

export default Post;
