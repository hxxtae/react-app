import React, { Component } from 'react';
import { Subject, TOC, Content } from './components';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      selected_content_id: 0,
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: 'Welcome', desc: 'Hello, React!!'},
      toc: [
        { id: 1, title: 'HTML', content: "HTML is for information" },
        { id: 2, title: 'CSS', content: "CSS is for design" },
        { id: 3, title: 'JavaScript',content: "JavaScript is for interactive" }
      ],
      onChangePageMain: () => {
        this.setState({ mode: 'welcome' });
      },
      onChangePageContent: (e) => {
        const id = e.target.dataset.id - 1;
        this.setState({
          mode: 'read',
          selected_content_id: id
        });
        e.preventDefault();
      }
    }
  }
  
  render() {
    let _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.toc[this.state.selected_content_id].title;
      _desc = this.state.toc[this.state.selected_content_id].content;
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          pageChange={this.state.onChangePageMain}></Subject>
        <TOC
          data={this.state.toc}
          pageChange={this.state.onChangePageContent}></TOC>
        <Content
          title={_title}
          content={_desc}></Content>
      </div>
    );
  }
}

export default App;


/*
  [Lesson.1]
  - props : key
  - state : value, function

  ※ 부모에서의 state 를 자식에게 전달 할 때에는 props 라는 것을 통해 값을 전달

  [Lesson.2]
  - state, props의 값이 바뀌면 render를 다시 호출한다. -> 화면이 다시 그려진다.

  [Lesson.3]
  - state 를 바꾸기 위해서는 this.state.(key) = '바꿈' 이 아니라
    React 함수를 사용하여 바꿔주어야 한다. 그래야 React가 알아먹는다.
  - this.setState({ key: '바꿈'})

  [Lesson.4]
  - 태그안 state에 함수를 정의하여 사용할 때 꼭 bind() 함수나 arrow 함수로 사용해야 한다.
    -> this 를 해당 컴포넌트로 바인드 하여야 한다.
  
  
*/