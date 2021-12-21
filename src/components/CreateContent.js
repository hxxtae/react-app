import React, { Component } from 'react';

class CreateContent extends Component {

  onSubmit = (e) => {
    const title = e.target.title.value; // name="title"
    const desc = e.target.desc.value;   // name="desc"
    this.props.onSubmit(title, desc);
    e.preventDefault();
  };

  render() {
    console.log('CreateContent');

    return (
      <article>
        <h2>Create</h2>
        <form action="/create_process" method="post" onSubmit={this.onSubmit}>
          <div className="input-group">
            <input type="text" name="title" placeholder="title"></input>
            <textarea name="desc" placeholder="description"></textarea>
            <div className="btn-group">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </article>
    );
  }
}

export default CreateContent;
