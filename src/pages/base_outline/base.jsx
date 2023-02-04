import React, { Component } from 'react';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';
import * as ConstClass from './const.js';

const bg_color = ConstClass.BG_COLOR;

class Base extends Component {
  state = {};
  render() {
    return (
      <>
        <ResponsiveAppBar />
        <div

          style={{
            marginTop: '15px',
            backgroundColor: bg_color,
          }}
        >
          <div  style={{
            height: '100%'
          }}>{this.props.children}</div>
        </div>
      </>
    );
  }
}

export default Base;
