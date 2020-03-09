import React from "react";
import Swatch from "./Swatch";
import { History } from "history";
import Pagination from "./Pagination";

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
  updateCurrentPage: (
    event: { preventDefault: () => void },
    pageNumber: number
  ) => void;
}

class SwatchContainer extends React.Component<Props, {}> {
  render(): JSX.Element {
    // filter colors if color param exists in URL
    const filteredSwatches = this.props.match.params.color
      ? this.props.colors.filter(
          color => this.props.match.params.color === color.colorFamily
        )
      : this.props.colors;

    let swatchesToRender = filteredSwatches.map(color => {
      return (
        <Swatch key={color.hex} hex={color.hex} history={this.props.history} />
      );
    });

    const indexOfLastPost = this.props.currentPage * this.props.swatchesPerPage;
    const indexOfFirstPost = indexOfLastPost - this.props.swatchesPerPage;
    swatchesToRender = swatchesToRender.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    return (
      <div className="swatch-container">
        <div className="swatches">{swatchesToRender}</div>
        <Pagination
          swatchesPerPage={this.props.swatchesPerPage}
          totalSwatches={filteredSwatches.length}
          updateCurrentPage={this.props.updateCurrentPage}
        />
      </div>
    );
  }
}

export default SwatchContainer;
