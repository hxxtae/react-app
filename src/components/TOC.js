import React, { Component } from 'react';

class TOC extends Component {
  render() {
    const list = [];
    const data = this.props.data;
    let i = 0;
    while (i < data.length) {
      list.push(
        <li key={data[i].id}>
          <a href={'/comment/' + data[i].id}
            data-id={data[i].id}
            onClick={this.props.pageChange}>
            {data[i].title}
          </a>
        </li>);
      i += 1;
    }
    console.log('Toc');
    return (
      <nav>
        <ul>
          {list}
        </ul>
      </nav>
    );
  }
}

export default TOC;
