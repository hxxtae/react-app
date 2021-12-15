import React, { Component } from 'react';
import { Subject, TOC, Content } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="World Wide Web!"></Subject>
        <TOC title="Web Menu" list_1="HTML" list_2="CSS" list_3="Javascript"></TOC>
        <Content title="HTML" content="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
