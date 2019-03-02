import React from "react";
import "../styles/MTASign.css";
import Bullet from "./Bullet";
import PropTypes from "prop-types";
import Color from "../js/RandomColor";

class MTASign extends React.Component {
  render() {
    let letters = this.props.bullets.split("");
    let numBullets = this.props.numBullets;
    let randomColorFlag = this.props.randomColors;
    let bulletColors = this.props.colors;

    let arrayBullets = [];
    for (let i = 0; i < numBullets; i++) {
      arrayBullets.push(i);
    }

    /** Actual rendering logic. */
    return (
      <article className="fl w-25 bg-near-black pa2 grow ma1">
        <div className="h-line nl2 nr2 bg-white" />
        <span className="fl w-100 dib white helvetica f2 fw4-plus mb1">
          {this.props.label}
        </span>
        <div className="w-15">
          {letters.length > 0
            ? letters.map(function(letter, index) {
                return (
                  <Bullet
                    key={index + 1}
                    letter={letter}
                    color={
                      randomColorFlag > 0
                        ? Color.getRandomColor()
                        : bulletColors[index]
                    }
                  />
                );
              })
            : arrayBullets.map(index => {
                return (
                  <Bullet
                    key={index + 1}
                    letter=""
                    color={
                      randomColorFlag === 1
                        ? Color.getRandomColor()
                        : bulletColors[index]
                    }
                  />
                );
              })}
        </div>
      </article>
    );
  }
}

MTASign.propTypes = {
  /** Label to be put on MTASign */
  label: PropTypes.string.isRequired,
  /** A String that contains the bullets to be rendered on the sign */
  bullets: PropTypes.string.isRequired,
  /** Let the bullets be rendered with random colors. 1 = yes*/
  randomColors: PropTypes.number,
  /** Specify the colors that each bullet should have, index dependant */
  colors: PropTypes.array.isRequired,
  /** Specify the number of bullets to be rendered if they are wanted without letters */
  numBullets: PropTypes.number,
};

MTASign.defaultProps = {
  randomColors: 0,
  bullets: "",
  colors: [],
  label: "",
  numBullets: 0,
};

export default MTASign;
