import React, { Component } from "react";
import ColorContext from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

class SelectColors4Class extends Component {
  static contextType = ColorContext;
  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };
  handleSetSubcolor = (color) => {
    this.context.actions.setSubcolor(color);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요</h2>
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={(e) => {
                e.preventDefault(); // 마우스 우클릭시 메뉴가 뜨는 것을 무시
                this.handleSetSubcolor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors4Class;
