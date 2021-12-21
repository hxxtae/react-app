import React, { Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log(`TOC ===> shouldComponentUpdate`);
    if (newProps.data === this.props.data) {
      return false;
    }
    return true;
  }

  pageChange = (e) => {
    const id = e.target.dataset.id - 1;
    this.props.pageChange(id);
    e.preventDefault();
  };

  listImplement = () => {
    const list = [];
    const data = this.props.data;
    let i = 0;
    while (i < data.length) {
      list.push(
        <li className='main-item' key={data[i].id}>
          <a href={'/comment/' + data[i].id}
            data-id={data[i].id}
            onClick={this.pageChange}>
            {data[i].title}
          </a>
        </li>);
      i += 1;
    }
    return list;
  }
  
  render() {
    console.log('Toc');

    return (
      <nav className='main'>
        <ul className="main-list">
          {this.listImplement()}
        </ul>
      </nav>
    );
  }
}

export default TOC;


// shouldComponentUpdate()
  // - return false : render() 함수가 호출 되지 않는다.
  // - return true : render() 함수가 호출 된다.
  // - parameter
  //   -> newProps.(propsName) : 변경된 props의 값을 리턴
  //   -> newState.(stateName) : 
  //   -> this.props.(propsName) : 이전 props의 값을 리턴
  //   -> this.state.(stateName) :
