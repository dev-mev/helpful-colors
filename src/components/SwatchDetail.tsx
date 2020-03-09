import React from "react";
import LeftSidebar from "./LeftSidebar";
import { useParams } from "react-router-dom";

function SwatchDetail(props: any): JSX.Element {
  const { hex } = useParams();

  return (
    <div className="app">
      <header className="header"></header>
      <LeftSidebar />
      <div className="swatch swatch-detail">
        <div
          className="color-block"
          style={{ backgroundColor: "#" + hex }}
        ></div>
        <div className="color-label">{"#" + hex}</div>
      </div>
      <button
        className="button back-button"
        onClick={(): void => {
          props.history.push("/");
        }}
      >
        Back to all swatches
      </button>
    </div>
  );
}

export default SwatchDetail;
