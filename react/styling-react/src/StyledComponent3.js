import React from "react";
import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) =>
    css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(args)};
      }
    `;
  // media: return { desktop: 미디어쿼리, tablet: 미디어쿼리 }
  return acc;
}, {});
// reduce(callback, init-value)
// acc: temp
// label: each-value
// ...args: params

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  height: 100px;
  padding: 1rem;
  display: flex;

  width: 1024px;
  margin: 0 auto;

  /*
    media.desktop(args = (width: 768px))
    @media (max-width: (1024 / 16)em) { // desktop: 1024
      width: 768px; // args...
    }
  */
  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`}
`;

const StyledComponent = () => {
  return <Box color="black"></Box>;
};

export default StyledComponent;
