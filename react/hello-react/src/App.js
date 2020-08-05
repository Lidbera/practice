import React, { Component } from 'react';
import './App.css';
import ScrollBox from './ScrollBox';
// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';
// import ValidationSample from './ValidationSample';

class App extends Component {
  render() {
    return (
      <>
        {/* <MyComponent favoriteNumber={1}>태그 사이의 내용</MyComponent> 
        <Counter />
        <Say />
        <EventPractice />
        <ValidationSample /> */}
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom(false)}>
          맨 위로
        </button>
        <button onClick={() => this.ScrollBox.scrollToBottom(true)}>
          맨 밑으로
        </button>
      </>
    );
  }
}

export default App;
