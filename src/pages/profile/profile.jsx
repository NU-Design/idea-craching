import React, { Component } from 'react';
import Base from '../base_outline/base';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';

const urlLink = "https://firebasestorage.googleapis.com/v0/b/idea-crashing.appspot.com/o/profile.png?alt=media&token=aeef9915-5f15-4394-901f-94805a956384";


class Profile extends Component {
  state = {};
  render() {
    return (
      <>
        <ResponsiveAppBar />
        <div style={{margin: 'auto', display: "flex"}}>
        <img src={urlLink} style={{ margin: "auto", width: '70%', height: '70%' }} /></div>
      </>
    );
  }
}

export default Profile;
