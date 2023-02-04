import React, { Component } from 'react';
import Base from '../base_outline/base';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';

class Profile extends Component {
  state = {};
  render() {
    return (
      <>
        <ResponsiveAppBar />
        <div>Some Demo Text Profile</div>
      </>
    );
  }
}

export default Profile;
