import React, { Component } from 'react';

class TOC extends Component {
  render() {
    const list = [];
    const data = this.props.data;
    let i = 0;
    while (i < data.length) {
      list.push(
        <li key={data[i].id}>
          <a href={'/comment/' + data[i].link}>{data[i].content}</a>
        </li>);
      i += 1;
    }
    console.log(list)
    return (
      <nav>
        <h2>{this.props.title}</h2>
        <ul>
          {list}
        </ul>
      </nav>
    );
  }
}

export default TOC;
