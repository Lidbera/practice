import { createAction, handleActions } from "redux-actions";
import { delay, put, takeLatest, throttle } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 마우스 클릭 이벤트가 payload에 들어가지 않도록
// () => undefined를 두 번째 파라미터로 넣어 줌
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(0); //1초 기다림
  yield put(increase()); // 특정 액션을 디스패치함
}
function* decreaseSaga() {
  yield delay(1000); //1초 기다림
  yield put(decrease()); // 특정 액션을 디스패치함
}

export function* counterSaga() {
  // 한 번 처리한 후, 3초동안 최대 하나의 후행 액션을 처리할 수 있도록 함
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);
  // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고, 가장 마지막에 실행된 작업만 수행함
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}
const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
