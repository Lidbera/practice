const test = function test(text) {
  console.log("text:", text);
  return function (text2) {
    console.log("text2:", text2);
    return function (text3) {
      console.log("text3:", text3);
    };
  };
};

test("test"); // 'text: test'
test("test")("test2"); // 'text: test \n text2: test2

console.log("=====");

const test2 = (text) => (text2) => (text3) => {
  console.log("text:", text);
  console.log("text2:", text2);
  console.log("text3:", text3);
};

test("test"); // 'text: test'
test("test")("test2"); // 'text: test \n text2: test2
