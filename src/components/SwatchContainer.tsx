import React from "react";
import Swatch from "./Swatch";
import { History } from "history";

interface Props {
  colors: { "color": string, "hex": string}[];
  history: History;
  match: any;
  swatchesPerPage: number;
  currentPage: number;
}

class SwatchContainer extends React.Component<Props, {}> {
  render() {
    const indexOfLastPost = this.props.currentPage * this.props.swatchesPerPage;
    const indexOfFirstPost = indexOfLastPost - this.props.swatchesPerPage;
    const currentSwatches = this.props.colors.slice(indexOfFirstPost, indexOfLastPost);

    const renderSwatches = this.props.match.params.color
      ? currentSwatches.map(color => {
          if (this.props.match.params.color === color.color) {
            return (
              <Swatch
                key={color.hex}
                hex={color.hex}
                history={this.props.history}
              />
            );
          }
        })
      : currentSwatches.map(color => {
          return (
            <Swatch
              key={color.hex}
              hex={color.hex}
              history={this.props.history}
            />
          );
        });

    return (
      <div className="swatch-container">{renderSwatches}</div>
    );
  }
}

export default SwatchContainer;
