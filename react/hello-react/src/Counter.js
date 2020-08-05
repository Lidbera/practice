import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  render() {
    const { number } = this.state;
    return (
      <>
        <div>{number}</div>
        <button
          onClick={() => {
            this.setState(
              (prevState) => ({
                number: prevState.number + 1,
              }),
              () => {
                console.log('+1 fin');
              }
            );
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            console.log('button clicked');
          }}
        >
          test button
        </button>
      </>
    );
  }
}

export default Counter;
