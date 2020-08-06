import React from 'react';
import ScrollBox from './ScrollBox';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import IterationSample from './IterationSample';

const Sample = () => {
  return (
    <div>
      <MyComponent favoriteNumber={1}>태그 사이의 내용</MyComponent>
      <Counter />
      <Say />
      <EventPractice />
      <ValidationSample />
      <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
      <button onClick={() => this.ScrollBox.scrollToBottom(false)}>
        맨 위로
      </button>
      <button onClick={() => this.ScrollBox.scrollToBottom(true)}>
        맨 밑으로
      </button>
      <IterationSample />
    </div>
  );
};

export default Sample;
