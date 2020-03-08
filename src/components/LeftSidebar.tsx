import React from "react";
import { Link } from "react-router-dom";

class LeftSidebar extends React.Component {
  // getRandomColor = () => {

  // }

  render() {
    return (
      <div className="sidebar">
        <button className="button random-button">Random Color</button>
        <ul className="sidebar-colors">
          <li><Link to="/colors/red">Red</Link></li>
          <li><Link to="/colors/yellow">Yellow</Link></li>
          <li><Link to="/colors/purple">Purple</Link></li>
        </ul>
      </div>
    )
  }
}

export default LeftSidebar;