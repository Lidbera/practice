import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    message: '',
    message2: '',
  });
  const { message, message2 } = form;
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onClick = (e) => {
    setForm({
      message: '',
      message2: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        value={message}
        placeholder="아무거나 입력해 보세요"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <br />
      <input
        type="text"
        name="message2"
        value={message2}
        placeholder="아무거나 입력해 보세요2"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <br />
      <button onClick={onClick}>비우기</button>
    </div>
  );
};

export default EventPractice;
