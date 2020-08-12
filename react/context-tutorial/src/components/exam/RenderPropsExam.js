import React from "react";
const RenderPropsExam = ({ children }) => {
  return <div>결과: :{children(5)}</div>;
};
export default RenderPropsExam;

//<RenderPropsExam>{(value) => 2 * value}</RenderPropsExam>; // 10
