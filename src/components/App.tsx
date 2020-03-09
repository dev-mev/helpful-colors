import React from "react";
import LeftSidebar from "./LeftSidebar";
import SwatchContainer from "./SwatchContainer";
import { History } from "history";
import { generateColorList } from "../utils/colorHelpers";
import logo from "../images/hh_logo.png";

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
    currentPage: 1
  };

  swatchesPerPage = 12;
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
        <header className="header">
          <a className="home-link" href="/">
            <img src={logo} alt=""></img>
          </a>
        </header>
        <LeftSidebar />
        <SwatchContainer
          colors={this.colors}
          history={this.props.history}
          match={this.props.match}
          swatchesPerPage={this.swatchesPerPage}
          currentPage={this.state.currentPage}
          updateCurrentPage={this.updateCurrentPage}
        />
      </div>
    );
  }
}

export default App;
