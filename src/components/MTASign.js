import React from "react";
import "./MTASign.css";

class MTASign extends React.Component {
  render() {
    return (
      <article className="bg-near-black pa2 grow-1 basis-content ma1">
        <div className="h-line nl2 nr2 bg-white" />
        <span className="dib white helvetica f2 fw4-plus mb1">Hello again</span>
        <div className="w-100">
          <span>Hello world</span>
        </div>
      </article>
    );
  }
}

export default MTASign;
