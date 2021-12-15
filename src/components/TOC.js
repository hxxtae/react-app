import React, { Component } from 'react';

class TOC extends Component {
  render() {
    return (
      <nav>
        <h2>{this.props.title}</h2>
        <ul>
          <li><a href="/">{this.props.list_1}</a></li>
          <li><a href="/">{this.props.list_2}</a></li>
          <li><a href="/">{this.props.list_3}</a></li>
        </ul>
      </nav>
    );
  }
}

export default TOC;
