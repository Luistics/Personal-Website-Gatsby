class RandomColor {
  static getRandomColor() {
    var result;
    var count = 0;
    let names = {
      "#0039A6": "mtaBlue",
      "#FF6319": "mtaOrange",
      "#6CBE45": "mtaLightGreen",
      "#996633": "mtaBrown",
      "#A7A9AC": "mtaGrey",
      "#FCCC0A": "mtaYellow",
      "#EE352E": "mtaRed",
      "#00933C": "mtaGreen",
      "#B933AD": "mtaPurple",
    };
    for (var prop in names) if (Math.random() < 1 / ++count) result = prop;
    return result;
  }
}

export default RandomColor;
