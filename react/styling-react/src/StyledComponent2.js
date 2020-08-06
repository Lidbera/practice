import React from "react";
import styled from "styled-components";

/*
  컴포넌트를 styled의 파라미터에 넣는 경우는
  아래처럼 className props를 최상위 DOM의 
  className값으로 설정하는 작업이 내부적으로 되어있어야 함
*/
const Link = ({ className }) => {
  return <div className={className}>This is 'Link' Component</div>;
};
const StyledLink = styled(Link)`
  color: blue;
`;
const Myinput = styled("input")`
  background: gray;
`;

const StyledComponent2 = () => {
  return (
    <div>
      <div>Hello styled-components</div>
      <StyledLink />
      <Myinput type="text" />
    </div>
  );
};

export default StyledComponent2;
