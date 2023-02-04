import React, { Component } from 'react';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <ResponsiveAppBar />
        <h1>This is a Home page</h1>
      </>
    );
  }
}

export default Home;
