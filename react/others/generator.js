function* watchGenerator() {
  console.log("monitoring");
  let prevAction = null;
  while (true) {
    const action = yield;
    console.log("이전 액션: ", prevAction);
    prevAction = action;
    if (action.type === "HELLO") {
      console.log("ㅎㅇ");
    }
  }
}
const watch = watchGenerator();
watch.next(); // 이전 액션:  null
watch.next({ type: "TEST" }); // 이전 액션:  { type: 'TEST' }
watch.next({ type: "HELLO" }); // ㅎㅇ
