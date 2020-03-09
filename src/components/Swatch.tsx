import React from "react";
import { History } from "history";

interface Props {
  hex: string;
  history: History;
}

class Swatch extends React.Component<Props, {}> {
  goToSwatchDetail = (event: { preventDefault: () => void }) => {
    const route = this.props.hex.replace("#", "");
    this.props.history.push(`/swatches/${route}`);
  };

  render(): JSX.Element {
    return (
      <button className="swatch" onClick={this.goToSwatchDetail}>
        <div
          className="color-block"
          style={{ backgroundColor: this.props.hex }}
        ></div>
        <div className="color-label">{this.props.hex}</div>
      </button>
    );
  }
}

export default Swatch;
