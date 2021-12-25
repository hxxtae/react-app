import React, { Component } from 'react';
import { Subject, TOC, Control, ReadContent, CreateContent, UpdateContent } from './components';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props); // props 초기화
    this.state = {
      mode: 'welcome',
      selected_content_id: '',
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: 'Welcome', desc: 'Hello, React!!'},
      toc: [
        { id: 1, title: 'HTML', desc: "HTML is for information" },
        { id: 2, title: 'CSS', desc: "CSS is for design" },
        { id: 3, title: 'JavaScript',desc: "JavaScript is for interactive" }
      ],
    }
    // state : mode, selected_content_id, subject, welcome, toc, ..
  }

  getContent() {
    let _title, _desc, _article, _data = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      _title = this.state.toc[this.state.selected_content_id].title;
      _desc = this.state.toc[this.state.selected_content_id].desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={this.onCreateSubmit}></CreateContent>;
    } else if (this.state.mode === 'update') {
      const selectId = this.state.selected_content_id;
      if (selectId !== '') {
        _data = this.state.toc[selectId];
        _article = <UpdateContent data={_data} onSubmit={this.onUpdateSubmit} ></UpdateContent>;
      }
    }
    return _article;
  }

  onChangeMain = () => {
    this.setState({ mode: 'welcome' });
  };

  onChangeContent = (id) => {
    this.setState({
      mode: 'read',
      selected_content_id: id,
    });
  };

  onChangeMode = (name) => {
    if (name !== 'delete') {
      this.setState({ mode: name });
    } else {
      const selectId = this.state.selected_content_id;
      if (selectId !== '') {
        const toc = [...this.state.toc];
        const newToc = toc.filter(item => item.id !== (+selectId + 1));
        console.log(newToc);
        this.setState({
          mode: "welcome",
          selected_content_id: '',
          toc: newToc
        });
      }
    }
  };

  onCreateSubmit = (title, desc) => {
    const tocLen = this.state.toc.length;
    const listCreate = this.state.toc.concat(
      {
        id: tocLen + 1,
        title,
        desc,
      }
    );
    // ※ 절대 이렇게 처리하지 말 것 : state를 직접 수정은 금물!(state의 원본을 직접 수정은 금물)
    //    ex) this.state.toc.push(값)
    //    ex) this.state.mode = '값'
    //    이유 : shouldComponentUpdate() 함수에서 this.props.(propsName) 는
    //    이전 props에 할당된 state 데이터를 리턴 해 주는데, 위의 예 처럼 직접 state 를 수정하게 되면
    //    this.props.(propsName) 는 이전이 아닌 바뀐 props 의 데이터를 리턴하기 때문에 혼란을 야기할 수 있기 때문이다.
    this.setState({ toc: listCreate });
  }

  onUpdateSubmit = (id, title, desc) => {
    const selectId = this.state.selected_content_id;
    const updateId = id;
    if (selectId === updateId) {
      const listUpdate = [...this.state.toc];
      listUpdate[updateId] = {
        id: id + 1,
        title,
        desc
      };
      this.setState({
        mode: "read",
        selected_content_id: selectId,
        toc: listUpdate
      });
    }
  }
  
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          pageChange={this.onChangeMain}></Subject>
        <TOC
          data={this.state.toc}
          pageChange={this.onChangeContent}></TOC>
        <Control
          onChangeMode={this.onChangeMode}></Control>
        {this.getContent()}
      </div>
    );
    // props : title, sub, pageChange, data, pageChange, onChangeMode ..
  }
}

export default App;


/*
  [Lesson.1]
  - props : key
  - state : value, function

  개념다지기

  ※ 부모에서의 state 를 자식에게 전달 할 때에는 props 라는 것을 통해 값을 전달
    -> props 는 전달자
    -> state 는 전달되는 값
  
  ※ props 와 state 의 차이점 : 데이터 전달의 차이
    상위 컴포넌트가 하위 컴포넌트로 데이터를 전달 할 때에는 props로 전달 하지만,
    하위 컴포넌트가 상위 컴포넌트로 데이터를 전달 할 때에는 props는 ReadOnly 이므로 props 로 전달 하는 것이 아니라
    상위 컴포넌트의 (state & 선언영역) 함수 안에 setState 를 구현하면, 하위 컴포넌트에서 이벤트를 심고 해당 함수를 호출하여 값을 전달한다.(바꾼다)

  ※ 요약하자면
    props는 상위 컴포넌트에서 하위 컴포넌트로 데이터 전달 가능
    state는 하위 컴포넌트에서 상위 컴포넌트로 데이터 전달 가능 (상위 컴포넌트 함수를, 하위 컴포넌트 이벤트에 심어서 전달 - setState())

  [Lesson.2]
  - state, props의 값이 바뀌면 render를 다시 호출한다. -> 화면이 다시 그려진다.

  [Lesson.3]
  - state 를 바꾸기 위해서는 this.state.(key) = '값' 이 아니라
    React 함수를 사용하여 바꿔주어야 한다. 그래야 React가 알아먹는다.
  - this.setState({ key: '값'})
  - this.setState() 는 현재 컴포넌트의 this.state의 값을 타겟으로 한다. ★★★

  [Lesson.4]
  - 컴포넌트 props에 함수를 정의하여 사용할 때 꼭 bind() 함수나 arrow 함수로 사용해야 한다.
    -> this 를 해당 컴포넌트로 바인드 하여야 한다.
  
  
  [정리]
  props -> | Component (state) | -> DOM

  [lesson.5]
  - shouldComponentUpdate()
    -> props 의 변경, state 의 변경을 감지하는 함수
  
  [lesson.6]
  - Immutable.js
    -> 배열에 push 를 하면 원본은 바뀌지만 concat 을 하면 원본의 복사본을 리턴한다.
    -> 이런 이슈를 바탕으로 immutable 라이브러리는 어떤 함수를 사용해도 원본은 그대로,
        복사본은 만들어 리턴 한다.
*/