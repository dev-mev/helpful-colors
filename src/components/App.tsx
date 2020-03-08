import React from "react";
import LeftSidebar from "./LeftSidebar";
import SwatchContainer from "./SwatchContainer";
import Pagination from "./Pagination";
import { History } from "history";

interface Props {
  history: History;
  match: any;
}

class App extends React.Component<Props, {}> {
  state = {
    currentPage: 1,
    swatchesPerPage: 12
  };

  colors = [
    { color: "red", hex: "#C70039" },
    { color: "yellow", hex: "#FFC300" },
    { color: "purple", hex: "#581845" },
    { color: "red", hex: "#C0392B" },
    { color: "yellow", hex: "#D4AC0D" },
    { color: "purple", hex: "#633974 " },
    { color: "red", hex: "#641E16" },
    { color: "yellow", hex: "#7D6608" },
    { color: "purple", hex: "#4A235A" },
    { color: "red", hex: "#F9EBEA" },
    { color: "yellow", hex: "#FCF3CF" },
    { color: "purple", hex: "#F4ECF7" },
    { color: "red", hex: "#F44336" },
    { color: "yellow", hex: "#FFF176" },
    { color: "purple", hex: "#673AB7" },
    { color: "red", hex: "#C62828" },
    { color: "yellow", hex: "#F9A825" },
    { color: "purple", hex: "#6A1B9A" }
  ];

  updateCurrentPage = (
    event: { preventDefault: () => void },
    pageNumber: number
  ) => {
    event.preventDefault();
    this.setState({ currentPage: pageNumber });
  };

  render() {
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
