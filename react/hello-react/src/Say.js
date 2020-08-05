import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히 가세요');

  const [color, setColor] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState('black');

  let textAlign = 'right';

  const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: false },
  ];
  let nextArray = array.concat({ id: 4 });
  nextArray = nextArray.filter((item) => item.id !== 2);
  nextArray = nextArray.map((item) =>
    item.id === 1 ? { ...item, value: false } : item
  );
  console.log('current::', array);
  console.log('next:', nextArray);

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color, backgroundColor }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        red
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        green
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        blue
      </button>

      <button
        style={{ color: 'blue' }}
        onClick={() => setBackgroundColor('blue')}
      >
        back blue
      </button>

      <div style={{ textAlign }}>test button</div>
    </div>
  );
};

export default Say;
