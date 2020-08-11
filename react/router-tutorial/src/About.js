import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ?를 생략함
  });
  const showDetail = query.detail === "true";
  // 쿼리의 파싱 결과 값은 문자열이기 때문에 문자열과 비교

  console.log(`location.search: [${location.search}]`);
  console.log(`query: [${query}]`);
  console.log(`query.detail: [${query.detail}]`);
  return (
    <div>
      <h1>소개</h1>
      <p>router tutorial</p>
      {showDetail && <p>detail값은 true</p>}
    </div>
  );
};

export default About;
