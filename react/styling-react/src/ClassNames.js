import React from "react";
import classNames from "classnames/bind";
import styles from "./CSSModule.module.scss";

const ClassNames = () => {
  const a = classNames("one", "two");
  const b = classNames("one", { two: true });
  const c = classNames("one", { two: false });
  const d = classNames("one", ["two", "three"]);

  const myClass = "hello";
  const e = classNames("one", myClass, { myCondition: true });

  console.log("a:", a);
  console.log("b:", b);
  console.log("c:", c);
  console.log("d:", d);
  console.log("e:", e);

  // 변수 값에 따라 다른 스타일 주기
  // const highlight = true;
  // const theme = "stringVariable";
  // <div className={classNames({ highlight }, theme)}>Hello classnames</div>

  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper", "inverted")}>
      <span className="something">Hello</span>
      <span className={cx("inverted")}>CSS Module & classnames</span>
    </div>
  );
};

export default ClassNames;
