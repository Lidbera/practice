import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {
  // 성공 및 실패 액션 타입을 정의
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async (dispatch) => {
    dispatch({ type }); // 시작됨
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      }); // 에러 발생
      dispatch(finishLoading(type));
      throw e;
    }
  };
}
// 사용법: createRequestChunk('GET_USERS', api.getUsers);
// connect의 두 번째 인자mapDispatchToProps에 넣으면 매개로 dispatch를 받으므로
// createRequestChunk('GET_USERS', api.getUsers)(params)(dispatch); 처럼 사용하는 것