import React from "react";
import LeftSidebar from "./LeftSidebar";
import SwatchContainer from "./SwatchContainer";
import Pagination from "./Pagination";
import { History } from "history";
import { generateColorList } from "../utils/colors";

interface Props {
  history: History;
  match: {
    params: {
      color: string;
    };
  };
}

class App extends React.Component<Props, {}> {
  state = {
    currentPage: 1,
    swatchesPerPage: 12
  };

  colors = generateColorList();

  updateCurrentPage = (
    event: { preventDefault: () => void },
    pageNumber: number
  ): void => {
    event.preventDefault();
    this.setState({ currentPage: pageNumber });
  };

  render(): JSX.Element {
    return (
      <div className="app">
        <header className="header"></header>
        <LeftSidebar />
        <SwatchContainer
          colors={this.colors}
          history={this.props.history}
          match={this.props.match}
          swatchesPerPage={this.state.swatchesPerPage}
          currentPage={this.state.currentPage}
        />
        <Pagination
          swatchesPerPage={this.state.swatchesPerPage}
          totalSwatches={this.colors.length}
          updateCurrentPage={this.updateCurrentPage}
        />
      </div>
    );
  }
}

export default App;
