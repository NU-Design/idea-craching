import React, { Component } from 'react';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <ResponsiveAppBar />
        <h1>this is home page</h1>
      </>
    );
  }
}

export default Home;
