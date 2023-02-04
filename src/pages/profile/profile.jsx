import React, { Component } from 'react';
import Base from '../base_outline/base';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';

class Profile extends Component {
  state = {};
  render() {
    return (
      <>
        <ResponsiveAppBar />
        <div><h1>This is a Profile page. </h1></div>
      </>
    );
  }
}

export default Profile;
