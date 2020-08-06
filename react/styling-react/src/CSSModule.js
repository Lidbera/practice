import React from "react";
import styles from "./CSSModule.module.scss";

const CSSModule = () => {
  console.log(styles);
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      hello <span className="something">CSS Module</span>
    </div>
  );
};

export default CSSModule;
