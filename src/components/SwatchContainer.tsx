import React from "react";
import Swatch from "./Swatch";
import { History } from "history";

interface Props {
  colors: { hex: string; colorFamily: string }[];
  history: History;
  match: {
    params: {
      color: string;
    };
  };
  swatchesPerPage: number;
  currentPage: number;
}

class SwatchContainer extends React.Component<Props, {}> {
  render(): JSX.Element {
    const filterBy = this.props.match.params.color
      ? this.props.colors.filter(
          color => this.props.match.params.color === color.colorFamily
        )
      : this.props.colors;

    let renderSwatches = filterBy.map(color => {
      return (
        <Swatch key={color.hex} hex={color.hex} history={this.props.history} />
      );
    });

    const indexOfLastPost = this.props.currentPage * this.props.swatchesPerPage;
    const indexOfFirstPost = indexOfLastPost - this.props.swatchesPerPage;
    renderSwatches = renderSwatches.slice(indexOfFirstPost, indexOfLastPost);

    return <div className="swatch-container">{renderSwatches}</div>;
  }
}

export default SwatchContainer;
