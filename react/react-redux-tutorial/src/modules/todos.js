import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋값 변경
const INSERT = 'todos/INSERT'; // 새 todos 등록
const TOGGLE = 'todos/TOGGLE'; // todos를 체크/해제
const REMOVE = 'todos/REMOVE'; // todos 제거

export const changeInput = createAction(CHANGE_INPUT, (input) => input);
let id = 3;
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: '',
  todos: [
    { id: 1, text: '리덕스 기초 배우기', done: false },
    { id: 2, text: '리액트와 리덕스 사용하기', done: false },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todos }) =>
      produce(state, (draft) => draft.todos.push(todos)),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const idx = draft.todos.findIndex(id);
        draft.todos.splice(idx, 1);
      }),
  },
  initialState,
);

export default todos;
