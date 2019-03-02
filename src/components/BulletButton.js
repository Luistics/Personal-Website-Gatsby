import React from "react";
import React from "react";

class BulletButton extends React.Component {
  render() {
    return (
      <svg
        className={"scale-1-4 pl-6px pt-6px"}
        width="32"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <circle fill={this.props.color} cx="13" cy="13" r="13" />
          <text
            fontFamily="Helvetica"
            fontSize="16"
            fontWeight="400"
            fill={this.props.color === "#FCCC0A" ? "black" : "white"}
          >
            <tspan x="7" y="19">
              {this.props.letter}
            </tspan>
          </text>
        </g>
      </svg>
    );
  }
}

export default BulletButton;
