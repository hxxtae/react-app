import React, { Component } from 'react';

class Control extends Component {

  onChange = (e) => {
    const name = e.target.dataset.name;
    this.props.onChangeMode(name);
    e.preventDefault();
  };

  render() {
    console.log('Control');

    return (
      // ※ 하나의 최상위 태그만 사용해야 한다.
      <div>
        <ul>
          <li><a href="/create" data-name="create" onClick={ this.onChange }>create</a></li>
          <li><a href="/update" data-name="update" onClick={ this.onChange }>update</a></li>
          <li><button type="button" data-name="delete" onClick={ this.onChange }>delete</button></li>
        </ul>
      </div>
    );
  }
}

export default Control;
