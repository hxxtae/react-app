import React, { Component } from 'react';
import { Subject, TOC, Content } from './components';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "WEB", sub: "World Wide Web!" },
      toc: [
        { id: 1, link: 'data-1', content: "HTML" },
        { id: 2, link: 'data-2', content: "CSS" },
        { id: 3, link: 'data-3',content: "JavaScript" }
      ],
    }
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}></Subject>
        <TOC
          data={this.state.toc}></TOC>
        <Content
          title="HTML"
          content="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;


/*
  - props : key
  - state : value

  ※ 부모에서의 state 를 자식에게 전달 할 때에는 props 라는 것을 통해 값을 전달
*/