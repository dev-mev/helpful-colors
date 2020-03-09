import React from "react";
import { Link } from "react-router-dom";
import colorFamilies from "../data/colorFamilies.json";

class LeftSidebar extends React.Component {
  generateRandomColor = (): string => {
    return colorFamilies[Math.floor(Math.random() * colorFamilies.length)];
  };

  render(): JSX.Element {
    return (
      <div className="sidebar">
        <button className="button random-button">
          <Link to={"/colors/" + this.generateRandomColor()}>Random Color</Link>
        </button>
        <ul className="sidebar-colors">
          {colorFamilies.map(color => (
            <li key={color}>
              <Link to={"/colors/" + color}>{color}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LeftSidebar;
