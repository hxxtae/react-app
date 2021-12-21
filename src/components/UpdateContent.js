import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props);

    // UpdateContent 의 컴포넌트의 state
    this.state = {
      content: ''
    }
  }

  onSubmit = (e) => {
    const id = this.props.data.id - 1;
    const newTitle = e.target.title.value;
    const newDesc = e.target.desc.value;
    this.props.onSubmit(id, newTitle, newDesc);
    e.preventDefault();
  }

  setInputData = (e) => {
    this.setState({ content: e.target.value });
  }

  render() {
    console.log('UpdateContent');

    return (
      <article>
        <h2>Update</h2>
        <form action="/update_process" method="post" onSubmit={this.onSubmit}>
          <div className="input-group">
            <input type="text" name="title" placeholder="title" defaultValue={this.props.data.title} onChange={this.setInputData}></input>
            <textarea name="desc" placeholder="description" defaultValue={this.props.data.desc} ></textarea>
            <div className="btn-group">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </article>
    );
  }
}

export default UpdateContent;

// [Lesson.1]
// React HTML 은 유사 HTML 이므로 input, textarea 에서 value 대신 defaultValue 를 사용해야 한다.

// [lesson.2]
// input, textarea 등 입력 폼 에서 텍스트 수정 시 
// 바로 수정된 텍스트를 해당 컴포넌트의 state 에 넣어주려면
// onChange={함수} 를 사용하여 함수 안에 this.setState({}) 를 호출하여 사용하면 된다.
