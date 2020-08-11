function increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve=성공, reject=실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        // 50보다 높으면 에러 발생시키기
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

function useNormalPromise() {
  increase(0)
    .then((number) => {
      // Promise에서 resolve된 값은 .then을 통해 받아올 수 있음
      console.log(number);
      return increase(number);
    })
    .then((number) => {
      // 또 .then으로 처리 가능
      console.log(number);
      return increase(number);
    })
    .then((number) => {
      console.log(number);
      return increase(number);
    })
    .then((number) => {
      console.log(number);
      return increase(number);
    })
    .then((number) => {
      console.log(number);
      return increase(number);
    })
    .catch((e) => {
      // 도중에 에러가 발생한다면 .catch로 알 수 있음
      console.log(e);
    });
}
async function runTasks() {
  try {
    // try/catch 구문을 사용해 에러를 처리
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

console.log("test.js");

// console.log("useNormalPromise start");
// useNormalPromise();
// console.log("useNormalPromise end");

console.log("runTasks start");
runTasks();
console.log("runTasks end");
